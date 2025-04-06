import { useState } from "react";
import { useMovies } from "../contexts/MoviesContext";
import flags from "../data/flagList";


export default function Home() {

    const { movies, handleMovie, seriesTV, handleTV } = useMovies();

    const [searchText, setSearchText] = useState('');

    const cover = "https://image.tmdb.org/t/p/w342";

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
                                    <img src={`${cover}${movie.poster_path}`} alt={`Poster di ${movie.title}`} />
                                    <li>Film: {movie.title}</li>
                                    <li>Titolo originale: {movie.original_title}</li>
                                    <li>Lingua: {flags[movie.original_language] ? (
                                        <img src={flags[movie.original_language]} alt={movie.original_language} />
                                    ) : (
                                        movie.original_language
                                    )}</li>
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
                                    <img src={`${cover}${series.poster_path}`} alt={`Poster di ${series.name}`} />
                                    <li>Serie: {series.name}</li>
                                    <li>Titolo originale: {series.original_name}</li>
                                    <li>Lingua: <img src={flags[series.original_language]} alt={series.original_language} /></li>
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


