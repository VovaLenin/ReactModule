import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import Main from "./components/main";
import Login from "./components/login";
import Users from "./components/users";

const App = () => {
    return (
        <>
            <NavBar />
            <Routes>
                {/* <Route path="*" element={<NotFound />} /> */}
                <Route path="/" element={<Main />} />
                <Route path="users/:userId?" element={<Users />} />
                <Route path="login" element={<Login />} />
                {/* <Route
                    path="admin"
                    element={<Navigate replace to="/dashboard" />}
                /> */}
            </Routes>
        </>
    );
};

export default App;
