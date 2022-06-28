import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDB from "../../images/tmdb_logo.svg";
import { Wrapper, Content, TMDBLogoImg, LogoImg } from "./Header.styles";
import { Context } from "../../context";
const Header = () => {
    const [user] = useContext(Context);

    return (
        <Wrapper>
            <Content>
                <Link to="/">
                    <LogoImg src={RMDBLogo} />
                </Link>
                {user ? (
                    <span className="loggedin">Logged in as: {user.username}</span>
                ) : (
                    <Link to="/login">
                        <a className="login">Login in</a>
                    </Link>
                )}
                <TMDBLogoImg src={RMDBLogo} />
            </Content>
        </Wrapper>
    );
};

export default Header;
