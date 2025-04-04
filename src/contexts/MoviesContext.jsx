import { createContext, useContext, useState, useEffect } from "react";

const MoviesContext = createContext();

function MoviesProvider({ children }) {

    const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;

    const [movies, setMovies] = useState([]);

    const base_movies_api_url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=it-IT&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

    useEffect(() => {
        fetch(base_movies_api_url)
            .then(res => res.json())
            .then(data => {
                setMovies(data);
            });
    }, []);

    return (

        <MoviesContext.Provider
            value={{
                movies,
                setMovies,
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