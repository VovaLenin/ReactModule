import React, { useState } from "react";
import API from "./API";
import SearchStatus from "./components/searchStatus";
import Users from "./components/users";

const App = () => {
  const [users, setUsers] = useState(API.users.fetchAll);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user._id !== id));
  };
  const handleToggleBookmark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) return { ...user, bookmark: !user.bookmark };
        return user;
      })
    );
  };

  return (
    <>
      <SearchStatus length={users.length} />
      <Users
        users={users}
        onDelete={handleDelete}
        onToggleBookmark={handleToggleBookmark}
      />
    </>
  );
};

export default App;
