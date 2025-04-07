import { createContext, useContext, useState } from "react";
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

    const urlMovie = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&include_adult=false&include_video=false`;
    const urlTV = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&include_adult=false&include_video=false`;
    const cover = "https://image.tmdb.org/t/p/w342";

    const flags = allFlags;

    // Recupera i dati dei film/serie, combinando url con l'input dell'utente
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

    // Rating espresso in stelle da 1 a 5, il rating originale è da 1 a 10
    function star(rating) {
        const halfNumb = rating / 2;
        const roundNumb = Math.floor(halfNumb);

        if (roundNumb === 1) {
            return (
                <>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarRegular} />
                    <FontAwesomeIcon icon={faStarRegular} />
                    <FontAwesomeIcon icon={faStarRegular} />
                    <FontAwesomeIcon icon={faStarRegular} />
                </>
            );
        } else if (roundNumb === 2) {
            return (
                <>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarRegular} />
                    <FontAwesomeIcon icon={faStarRegular} />
                    <FontAwesomeIcon icon={faStarRegular} />
                </>
            );
        } else if (roundNumb === 3) {
            return (
                <>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarRegular} />
                    <FontAwesomeIcon icon={faStarRegular} />
                </>
            );
        } else if (roundNumb === 4) {
            return (
                <>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarRegular} />
                </>
            );
        } else if (roundNumb === 5) {
            return (
                <>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </>
            );
        } else {
            return (
                <>
                    <FontAwesomeIcon icon={faStarRegular} />
                    <FontAwesomeIcon icon={faStarRegular} />
                    <FontAwesomeIcon icon={faStarRegular} />
                    <FontAwesomeIcon icon={faStarRegular} />
                    <FontAwesomeIcon icon={faStarRegular} />
                </>
            );
        }
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
                iconSearch
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
