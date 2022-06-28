import React from "react";
import { Img, Wrapper } from "./Actor.styles";
import PropTypes from "prop-types";

const Actor = ({ name, character, imageUrl }) => {
    return (
        <Wrapper>
            <Img src={imageUrl} />
            <h3>{name}</h3>
            <p>{character}</p>
        </Wrapper>
    );
};

Actor.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    imageUrl: PropTypes.string,
};

export default Actor;
