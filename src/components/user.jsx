import { React, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import API from "../API";
import QualitiesList from "./qualitiesList";

const User = ({ id }) => {
    const [user, setUser] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        API.users.getById(id).then((data) => setUser(data));
    }, []);
    const handleSave = () => {
        navigate("/users", { replace: true });
    };
    if (user) {
        return (
            <>
                <h3>{user.name}</h3>
                <p>{`Профессия: ${user.profession.name}`}</p>
                <QualitiesList qualities={user.qualities} />
                <p>{`Завершенных встреч: ${user.completedMeetings}`}</p>
                <p>{`Оценка: ${user.rate}`}</p>
                <button onClick={() => handleSave()}>
                    Ко всем пользователям
                </button>
            </>
        );
    }
    return "Loading...";
};

User.propTypes = {
    id: PropTypes.string
};

export default User;
