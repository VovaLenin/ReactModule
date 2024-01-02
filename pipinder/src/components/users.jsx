import React, { useState } from "react";
import User from "./user";
import Pagination from "./pagination";
import paginate from "../app/utils/paginate";
import PropTypes from "prop-types";

const Users = ({ users, ...rest }) => {
  const count = users.length;
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const userCrop = paginate(users, currentPage, pageSize);

  if (users.length) {
    return (
      <>
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
        <Pagination
          pageSize={pageSize}
          itemsCount={count}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array
};

export default Users;
