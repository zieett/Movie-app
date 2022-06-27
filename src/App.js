import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/:movieId" element={<Movie />}></Route>
                <Route path="/*" element={<NotFound />}></Route>
            </Routes>

            <GlobalStyle></GlobalStyle>
        </Router>
    );
};

export default App;
