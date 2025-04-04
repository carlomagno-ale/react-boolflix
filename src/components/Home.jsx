import { useState } from "react";
import { useMovies } from "../contexts/MoviesContext";

export default function Home() {

    const { movies, clickFetch } = useMovies();

    const [searchText, setSearchText] = useState('')

    return (

        <>
            <div>
                <input
                    type="text"
                    placeholder="Cerca un film"
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button onClick={() => clickFetch(searchText)}>
                    Search
                </button>

                <section>
                    {movies.length > 0 ? (
                        <div>
                            {movies.map((movie) => (
                                <ul key={movie.id}>
                                    <li>{movie.title}</li>
                                    <li>Titolo originale: {movie.original_title}</li>
                                    <li>Lingua: {movie.original_language}</li>
                                    <li>Voti: {movie.vote_count}</li>
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


