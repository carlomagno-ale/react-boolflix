import { createContext, useContext, useState, useEffect } from "react";
import allFlags from "../data/flagList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import placeholder from "../assets/placeholder.jpg";
import logo from "../assets/logo.png";

const GlobalContext = createContext();
const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;

const iconSearch = <FontAwesomeIcon icon={faMagnifyingGlass} />;

function GlobalProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [seriesTV, setSeriesTV] = useState([]);
    const [popularMovies, setPopularMovies] = useState([])
    const [error, setError] = useState([])
    const [errorTV, setErrorTV] = useState([])

    const urlMovie = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&include_adult=false&include_video=false`;
    const urlTV = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&include_adult=false&include_video=false`;
    const urlPopular = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&sort_by=popularity.desc&include_adult=false&include_video=false`;

    const cover = "https://image.tmdb.org/t/p/w342";

    const flags = allFlags;

    // Recupera i dati dei film/serie, combinando url con l'input dell'utente
    function handleMovie(searchText) {
        fetch(urlMovie + `&query=${searchText}`)
            .then(res => res.json())
            .then(data => {
                setMovies(data.results)
                setError(data.results.length > 0 ? data.results : false);
            })
            .catch((error) => {
                console.error("Error", error);
            });
    }

    function handleTV(searchText) {
        fetch(urlTV + `&query=${searchText}`)
            .then(res => res.json())
            .then(data => {
                setSeriesTV(data.results)
                setErrorTV(data.results.length > 0 ? data.results : false);
            })
            .catch((error) => {
                console.error("Error", error);
            });
    }

    useEffect(() => {
        fetch(urlPopular)
            .then(res => res.json())
            .then(data => {
                setPopularMovies(data.results);
            });
    }, []);



    // Rating espresso in stelle da 1 a 5, il rating originale è da 1 a 10
    function star(rating) {
        const halfNumb = rating / 2;
        const roundNumb = Math.floor(halfNumb);

        let stars = [];

        for (let i = 0; i < 5; i++) {
            stars.push(i < roundNumb ? <FontAwesomeIcon key={i} icon={faStar} /> : <FontAwesomeIcon key={i} icon={faStarRegular} />);
        }
        return stars;
    }

    return (
        <GlobalContext.Provider
            value={{
                movies,
                setMovies,
                handleMovie,
                seriesTV,
                setSeriesTV,
                handleTV,
                cover,
                star,
                flags,
                placeholder,
                logo,
                iconSearch,
                popularMovies,
                error,
                errorTV
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

function useGlobal() {
    const context = useContext(GlobalContext);
    return context;
}

export { GlobalProvider, useGlobal };
