import { createContext, useContext, useState } from "react";
import allFlags from "../data/flagList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const MoviesContext = createContext();
const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;


function MoviesProvider({ children }) {

    const [movies, setMovies] = useState([]);
    const [seriesTV, setSeriesTV] = useState([]);

    const urlMovie = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&include_adult=false&include_video=false`;
    const urlTV = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&include_adult=false&include_video=false`
    const cover = "https://image.tmdb.org/t/p/w342";

    const flags = allFlags

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
                </>);

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
                </>)

        } else if (roundNumb === 4) {

            return (
                <>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarRegular} />
                </>)


        } else if (roundNumb === 5) {

            return (
                <>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </>)

        } else {

            return (
                <>
                    <FontAwesomeIcon icon={faStarRegular} />
                    <FontAwesomeIcon icon={faStarRegular} />
                    <FontAwesomeIcon icon={faStarRegular} />
                    <FontAwesomeIcon icon={faStarRegular} />
                    <FontAwesomeIcon icon={faStarRegular} />
                </>);
        }
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
                cover,
                star,
                flags
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