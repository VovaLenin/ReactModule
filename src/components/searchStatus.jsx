import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    let classes = "badge bg-primary";
    let countBageMessage = "";
    const lastDigit = Number(String({ length }).slice(-1));
    if (length === 0) {
        classes = "badge bg-danger";
        countBageMessage = "Никто не тусанет с тобой сегодня";
    } else if (
        length === 1 ||
        (length > 4 && length < 22) ||
        (length > 21 && (lastDigit === 1 || lastDigit > 4))
    )
        countBageMessage = `${length} человек тусанет с тобой сегодня`;
    else countBageMessage = `${length} человека тусанет с тобой сегодня`;
    return (
        <>
            <span className={classes}>{countBageMessage}</span>
        </>
    );
};

SearchStatus.propTypes = {
    length: PropTypes.number
};

export default SearchStatus;
