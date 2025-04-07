import { useState } from "react";
import { useMovies } from "../contexts/MoviesContext";

export default function Home() {

    const { movies, handleMovie, seriesTV, handleTV, cover, star, flags, placeholder } = useMovies();
    const [searchText, setSearchText] = useState('');

    return (
        <>
            <div>
                <form className="text-center mt-5"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleMovie(searchText.toLowerCase());
                        handleTV(searchText.toLowerCase());
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
                                    <img
                                        src={movie.poster_path ? `${cover}${movie.poster_path}` : placeholder}
                                        alt={`Poster di ${movie.title}`}
                                    />
                                    <li>Film: {movie.title}</li>
                                    <li>Titolo originale: {movie.original_title}</li>
                                    <li>Lingua: {flags[movie.original_language] ? (
                                        <img src={flags[movie.original_language]} alt={movie.original_language} />
                                    ) : (
                                        movie.original_language
                                    )}</li>
                                    <li>Voti: {star(movie.vote_average)}</li>
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
                                    <img
                                        src={series.poster_path ? `${cover}${series.poster_path}` : placeholder}
                                        alt={`Poster di ${series.name}`}
                                    />
                                    <li>Serie: {series.name}</li>
                                    <li>Titolo originale: {series.original_name}</li>
                                    <li>Lingua: <img src={flags[series.original_language]} alt={series.original_language} /></li>
                                    <li>Voti: {star(series.vote_average)}</li>
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


