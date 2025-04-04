import { createContext, useContext, useState, useEffect } from "react";
const PopularMoviesContext = createContext();

function PopularMoviesProvider({ children }) {

    const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;

    const base_movies_api_url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=it-IT&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

    const [popularMovies, setPopularMovies] = useState([]);


    useEffect(() => {
        fetch(base_movies_api_url)
            .then(res => res.json())
            .then(data => {

                setPopularMovies(data)

            })
    }, [])

    return (
        <PopularMoviesContext.Provider
            value={{
                popularMovies,
                setPopularMovies,
            }}
        >
            {children}
        </PopularMoviesContext.Provider>
    );
}

// Definiamo un hook per consumare il contesto
function usePopularMovies() {
    const context = useContext(PopularMoviesContext);
    return context;
}
// Esportiamo il nostro provider ed il nostro hook
export { PopularMoviesProvider, usePopularMovies }