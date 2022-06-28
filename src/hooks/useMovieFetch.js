import React, { useState, useEffect } from "react";
import API from "../API";
import { isPersistedState } from "../helpers";

const useMovieFetch = (movieId) => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true);
                setError(false);

                const movie = await API.fetchMovie(movieId);
                const credit = await API.fetchCredits(movieId);

                const directors = credit.crew.filter((member) => member.job === "Director");

                setState({ ...movie, actors: credit.cast, directors });
                setLoading(false);
            } catch (error) {
                setError(true);
            }
        };
        const sessionState = isPersistedState(movieId);
        if (sessionState) {
            setState(sessionState);
            setLoading(false);
            return;
        }
        fetchMovie();
    }, [movieId]);

    //Write to session storage
    useEffect(() => {
        sessionStorage.setItem(movieId, JSON.stringify(state));
    }, [movieId, state]);

    return { state, loading, error };
};

export default useMovieFetch;
