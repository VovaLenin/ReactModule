import React, { useEffect, useState } from "react";
import Pagination from "./pagination";
import paginate from "../app/utils/paginate";
import SearchStatus from "./searchStatus";
import GroupList from "./groupList";
import API from "../API";
import PropTypes from "prop-types";
import UsersTable from "./usersTable";
import _ from "lodash";

const Users = ({ users, ...rest }) => {
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfessions(data));
    }, []);
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };
    const handleSort = (item) => {
        setSortBy(item);
    };
    const clearFilter = () => {
        setSelectedProf();
    };
    const filteredUsers = selectedProf
        ? users.filter((user) => user.profession._id === selectedProf._id)
        : users;
    // const filteredUsers = selectedProf
    //     ? users.filter(
    //           (user) =>
    //               JSON.stringify(user.profession) ===
    //               JSON.stringify(selectedProf)
    //       )
    //     : users;
    const count = filteredUsers.length;
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
    const userCrop = paginate(sortedUsers, currentPage, pageSize);

    if (users.length) {
        return (
            <div className="d-flex">
                {professions && (
                    <div className="d-flex flex-column flex-shrink-0 p-2">
                        <GroupList
                            selectedItem={selectedProf}
                            items={professions}
                            onItemSelect={handleProfessionSelect}
                        />
                        <button
                            className="btn btn-secondary mt-1"
                            onClick={clearFilter}
                        >
                            Очистить
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column flex-shrink-0 p-2">
                    <SearchStatus length={count} />
                    {count > 0 && (
                        <UsersTable
                            users={userCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            {...rest}
                        />
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            pageSize={pageSize}
                            itemsCount={count}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
};

Users.propTypes = {
    users: PropTypes.array.isRequired
};

export default Users;
