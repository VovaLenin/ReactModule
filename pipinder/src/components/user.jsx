import React from "react";
import Quality from "./quality";
import Bookmark from "./bookmark";
import PropTypes from "prop-types";

const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  bookmark,
  onToggleBookmark,
  onDelete
}) => {
  return (
    <>
      <tr key={_id}>
        <td>{name}</td>
        <td>
          {qualities.map((quality, index) => (
            <Quality key={index} {...quality} />
          ))}
        </td>
        <td>{profession.name}</td>
        <td>{completedMeetings}</td>
        <td>{rate}/5</td>
        <td>
          <Bookmark
            status={bookmark}
            onClick={() => onToggleBookmark(_id)}
          ></Bookmark>
        </td>
        <td>
          <button
            id={_id}
            className="badge bg-danger"
            onClick={() => onDelete(_id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

User.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  qualities: PropTypes.array,
  profession: PropTypes.object.isRequired,
  completedMeetings: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  bookmark: PropTypes.bool,
  onToggleBookmark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default User;
