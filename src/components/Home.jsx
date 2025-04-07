import { useState } from "react";
import { useMovies } from "../contexts/MoviesContext";

export default function Home() {

    const { movies, handleMovie, seriesTV, handleTV, cover, star, flags, placeholder, logo, iconSearch } = useMovies();
    const [searchText, setSearchText] = useState('');

    return (
        <>

            <header>
                <div className="container">
                    <nav className="navbar navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand">
                                <img src={logo} alt="Boolflix Logo" />
                            </a>
                            <form className="d-flex" role="search"

                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleMovie(searchText.toLowerCase());
                                    handleTV(searchText.toLowerCase());
                                    setSearchText('');
                                }}
                            >
                                <input
                                    className="form-control me-2"
                                    type="text"
                                    placeholder="Cerca un film o una serie"
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                />
                                <button className="btn btn-outline-danger" type="submit">{iconSearch}</button>
                            </form>

                        </div>
                    </nav>
                </div>
            </header>

            <div>


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


