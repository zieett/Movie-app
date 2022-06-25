import React, { useState, useEffect } from "react";
//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
//Image
import noImage from "../images/no_image.jpg";
//Components
import HeroImage from "./HeroImage";
import { useHomeFetch } from "../hooks/useHomeFetch";
const Home = () => {
    const { state, loading, error } = useHomeFetch();

    return (
        <>
            {state.results[0] ? (
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />
            ) : null}
        </>
    );
};

export default Home;
