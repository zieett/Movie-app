import React, { useContext } from "react";

import Thumb from "../Thumb";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import API from "../../API";
import noImage from "../../images/no_image.jpg";
import { Content, Wrapper, Text } from "./MovieInfo.styles";
import Rate from "../Rate";
import PropTypes from "prop-types";
import Movie from "../Movie";
import { Context } from "../../context";

const MovieInfo = ({ movie }) => {
    const [user] = useContext(Context);
    console.log(movie);
    const handleRating = async (value) => {
        const rate = await API.rateMovie(user.sessionId, movie.id, value);
    };
    return (
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <Thumb
                    image={
                        movie.poster_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                            : noImage
                    }
                    clickable={false}
                />
                <Text>
                    <h1>{movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>

                    <div className="rating-directors">
                        <div>
                            <h3>RATING</h3>
                            <div className="score">{parseFloat(movie.vote_average).toFixed(1)}</div>
                        </div>
                        <div className="director">
                            <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
                            {movie.directors.map((director) => {
                                return <p key={director.credit_id}>{director.name}</p>;
                            })}
                        </div>
                    </div>
                    {user && (
                        <div>
                            <p>Rate Movie</p>
                            <Rate callback={handleRating}></Rate>
                        </div>
                    )}
                </Text>
            </Content>
        </Wrapper>
    );
};

MovieInfo.propTypes = {
    movie: PropTypes.object,
};
export default MovieInfo;
