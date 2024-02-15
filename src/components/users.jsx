import React from "react";
import { useParams } from "react-router-dom";
import UsersList from "./usersList";
import User from "./user";

const Users = () => {
    const params = useParams();
    const { userId } = params;

    return userId ? <User id={userId} /> : <UsersList />;
};

export default Users;
