import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import { useParams } from "react-router-dom";
import Grid from "./Grid";
import Spinner from "./Spinner";
import MovieInfo from "./MovieInfo";
import noImage from "../images/no_image.jpg";
import useMovieFetch from "../hooks/useMovieFetch";
import BreadCumb from "./BreadCumb";
const Movie = () => {
    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);
    console.log(movie);
    if (loading) return <Spinner />;
    if (error) return <div>Something went wrong...</div>;
    return (
        <>
            <BreadCumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie}></MovieInfo>
        </>
    );
};

export default Movie;
