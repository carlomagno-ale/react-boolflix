import { createContext, useContext, useState } from "react";

const MoviesContext = createContext();

const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;

function MoviesProvider({ children }) {

    const [movies, setMovies] = useState([]);

    const urlMovie = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}`;

    function clickFetch(searchText) {

        fetch(urlMovie + `&query=${searchText}`)
            .then(res => res.json())
            .then(data => {

                setMovies(data.results);

            });
    }

    return (

        <MoviesContext.Provider
            value={{
                movies,
                setMovies,
                clickFetch
            }}
        >
            {children}
        </MoviesContext.Provider>
    );
}

function useMovies() {
    const context = useContext(MoviesContext);
    return context;
}

export { MoviesProvider, useMovies }