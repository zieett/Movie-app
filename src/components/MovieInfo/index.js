import React from "react";

import Thumb from "../Thumb";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

import noImage from "../../images/no_image.jpg";
import { Content, Wrapper, Text } from "./MovieInfo.styles";
import PropTypes from "prop-types";
import Movie from "../Movie";
const MovieInfo = ({ movie }) => {
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
                </Text>
            </Content>
        </Wrapper>
    );
};

MovieInfo.propTypes = {
    movie: PropTypes.object,
};
export default MovieInfo;
