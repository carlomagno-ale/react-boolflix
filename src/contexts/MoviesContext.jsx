import { createContext, useContext, useState } from "react";

const MoviesContext = createContext();
const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;

function MoviesProvider({ children }) {

    const [movies, setMovies] = useState([]);
    const [seriesTV, setSeriesTV] = useState([]);

    const urlMovie = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&include_adult=false&include_video=false`;
    const urlTV = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&include_adult=false&include_video=false`

    function handleMovie(searchText) {

        fetch(urlMovie + `&query=${searchText}`)
            .then(res => res.json())
            .then(data => {

                setMovies(data.results);

            })
            .catch((error) => {
                console.error("Error", error);
            });
    }

    function handleTV(searchText) {

        fetch(urlTV + `&query=${searchText}`)
            .then(res => res.json())
            .then(data => {

                setSeriesTV(data.results);

            })
            .catch((error) => {
                console.error("Error", error);
            });
    }

    return (

        <MoviesContext.Provider
            value={{
                movies,
                setMovies,
                handleMovie,
                seriesTV,
                setSeriesTV,
                handleTV,
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