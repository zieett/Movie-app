import React from "react";
import { Link } from "react-router-dom";
import { Content, Wrapper } from "./BreadCumb.styles";
import Proptypes from "prop-types";
const BreadCumb = ({ movieTitle }) => {
    return (
        <Wrapper>
            <Content>
                <Link to="/">
                    <span>Home</span>
                </Link>
                <span>|</span>
                <span>{movieTitle}</span>
            </Content>
        </Wrapper>
    );
};

BreadCumb.propTypes = {
    movieTitle: Proptypes.string,
};

export default BreadCumb;
