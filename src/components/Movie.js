import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import { useParams } from "react-router-dom";
import Grid from "./Grid";
import Spinner from "./Spinner";
import MovieInfo from "./MovieInfo";
import noImage from "../images/no_image.jpg";
import useMovieFetch from "../hooks/useMovieFetch";
import BreadCumb from "./BreadCumb";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";
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
            <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
            <Grid header="Actors">
                {movie.actors.map((actor) => (
                    <Actor
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={
                            actor.profile_path
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                                : noImage
                        }
                    ></Actor>
                ))}
            </Grid>
        </>
    );
};

export default Movie;
