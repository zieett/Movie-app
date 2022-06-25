import React from "react";
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDB from "../../images/tmdb_logo.svg";
import { Wrapper, Content, TMDBLogoImg, LogoImg } from "./Header.styles";
const Header = () => {
    return (
        <Wrapper>
            <Content>
                <LogoImg src={RMDBLogo} />
                <TMDBLogoImg src={RMDBLogo} />
            </Content>
        </Wrapper>
    );
};

export default Header;
