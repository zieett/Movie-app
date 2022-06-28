import React from "react";
import { Link } from "react-router-dom";

import { Image } from "./Thumb.styles";
import PropTypes from "prop-types";
const Thumb = ({ image, movieId, clickable }) => {
    return (
        <div>
            {clickable ? (
                <Link to={`/${movieId}`}>
                    <Image src={image} alt="movie-thumb"></Image>
                </Link>
            ) : (
                <Image src={image} alt="movie-thumb"></Image>
            )}
        </div>
    );
};

Thumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool,
};

export default Thumb;
