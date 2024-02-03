import React, { useState, useEffect } from "react";
import API from "./API";
import Users from "./components/users";

const App = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDelete = (id) => {
        setUsers(users.filter((user) => user._id !== id));
    };
    const handleToggleBookmark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id)
                    return { ...user, bookmark: !user.bookmark };
                return user;
            })
        );
    };

    return (
        <>
            {users && (
                <Users
                    users={users}
                    onDelete={handleDelete}
                    onToggleBookmark={handleToggleBookmark}
                />
            )}
        </>
    );
};

export default App;
