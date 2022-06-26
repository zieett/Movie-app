import React, { useState, useEffect } from "react";

//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//Image
import noImage from "../images/no_image.jpg";

//Components
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";

//Custom hooks
import { useHomeFetch } from "../hooks/useHomeFetch";
const Home = () => {
    const { state, loading, error, setSearchTerm } = useHomeFetch();
    console.log(state);
    return (
        <>
            {state.results[0] ? (
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />
            ) : null}
            <SearchBar setSearchTerm={setSearchTerm}></SearchBar>
            <Grid header="Popular movies">
                {state.results.map((movie) => {
                    return (
                        <Thumb
                            key={movie.id}
                            clickable
                            image={
                                movie.poster_path
                                    ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                    : noImage
                            }
                        >
                            {movie.title}
                        </Thumb>
                    );
                })}
            </Grid>
            <Spinner></Spinner>
        </>
    );
};

export default Home;
