import React, { useState, useRef, useEffect } from "react";

import { Wrapper, Content } from "./SearchBar.styles";

import searchIcon from "../../images/search-icon.svg";
import PropTypes from "prop-types";
const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState("");
    const inital = useRef(true);

    useEffect(() => {
        if (inital.current) {
            inital.current = false;
            return;
        }
        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500);
        return () => clearTimeout(timer);
    }, [setSearchTerm, state]);

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="" />
                <input
                    type="text"
                    placeholder="Search movie"
                    onChange={(event) => setState(event.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    );
};

SearchBar.propTypes = {
    setSearchTerm: PropTypes.string,
};
export default SearchBar;
