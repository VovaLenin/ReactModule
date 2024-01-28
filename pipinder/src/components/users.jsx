import React, { useEffect, useState } from "react";
import User from "./user";
import Pagination from "./pagination";
import paginate from "../app/utils/paginate";
import SearchStatus from "./searchStatus";
import GroupList from "./groupList";
import API from "../API";
import PropTypes from "prop-types";

const Users = ({ users, ...rest }) => {
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
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
    const clearFilter = () => {
        setSelectedProf();
    };
    const filteredUsers = selectedProf
        ? users.filter((user) => user.profession === selectedProf)
        : users;
    const count = filteredUsers.length;
    const userCrop = paginate(filteredUsers, currentPage, pageSize);

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
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Имя</th>
                                <th>Качества</th>
                                <th>Профессия</th>
                                <th>Количество встреч</th>
                                <th>Оценка</th>
                                <th>Избранное</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {userCrop.map((user, index) => (
                                <User key={index} {...user} {...rest} />
                            ))}
                        </tbody>
                    </table>
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
    users: PropTypes.array
};

export default Users;
