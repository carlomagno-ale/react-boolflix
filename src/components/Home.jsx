import { useState } from "react";
import { useMovies } from "../contexts/MoviesContext";

export default function Home() {

    const { movies, handleMovie, seriesTV, handleTV } = useMovies();

    const [searchText, setSearchText] = useState('')

    return (
        <>
            <div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleMovie(searchText);
                        handleTV(searchText);
                        setSearchText('');
                    }}
                >
                    <input
                        type="text"
                        placeholder="Cerca un film o una serie"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button type="submit">Cerca</button>
                </form>

                <section>
                    {movies.length > 0 ? (
                        <div>
                            {movies.map((movie) => (
                                <ul key={movie.id}>
                                    <li>{movie.title}</li>
                                    <li>Titolo originale: {movie.original_title}</li>
                                    <li>Lingua: {movie.original_language}</li>
                                    <li>Voti: {movie.vote_average}</li>
                                </ul>
                            ))}
                        </div>
                    ) : (
                        <span></span>
                    )}
                    {seriesTV.length > 0 ? (
                        <div>
                            {seriesTV.map((series) => (
                                <ul key={series.id}>
                                    <li>{series.name}</li>
                                    <li>Titolo originale: {series.original_name}</li>
                                    <li>Lingua: {series.original_language}</li>
                                    <li>Voti: {series.vote_average}</li>
                                </ul>
                            ))}
                        </div>
                    ) : (
                        <span></span>
                    )}
                </section>
            </div>
        </>
    );
}


