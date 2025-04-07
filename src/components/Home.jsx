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
                            <form className="d-flex my-2" role="search"
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

            <main>
                <div className="container mb-4">
                    <section className="row g-4 mt-1 justify-content-center">
                        {movies.length > 0 ? (
                            <>
                                {movies.map((movie) => (
                                    <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                                        <div className="card border-0 h-100">

                                            <img
                                                src={movie.poster_path ? `${cover}${movie.poster_path}` : placeholder}
                                                alt={`Poster di ${movie.title}`}
                                                className="card-img-top cover"
                                            />

                                            <div className="card-overlay border-0">
                                                <div className="overlay-content">
                                                    <h4 className="card-title">{movie.title}</h4>
                                                    <span className="value-title">Titolo originale:</span> {movie.original_title}
                                                    <div><span className="value-title">Lingua:</span>  <span className="flag">{flags[movie.original_language] ? (
                                                        <img src={flags[movie.original_language]} alt={movie.original_language} />
                                                    ) : (
                                                        movie.original_language
                                                    )}</span></div>
                                                    <div><span className="value-title">Voto:</span><span className="rating-star"> {star(movie.vote_average)}</span></div>
                                                    {movie.overview.length > 0 ? (<><span className="value-title">Overview:</span><span className="overview">{movie.overview}</span></>) : (
                                                        <span></span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <span></span>
                        )}

                        {/* TV */}
                        {seriesTV.length > 0 ? (
                            <>
                                {seriesTV.map((series) => (
                                    <div key={series.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <div className="card border-0 h-100">

                                            <img
                                                src={series.poster_path ? `${cover}${series.poster_path}` : placeholder}
                                                alt={`Poster di ${series.name}`}
                                                className="card-img-top cover"
                                            />

                                            <div className="card-overlay border-0">
                                                <div className="overlay-content">
                                                    <h4 className="card-title">{series.name}</h4>
                                                    <span className="value-title">Titolo originale:</span> {series.original_name}
                                                    <div><span className="value-title">Lingua:</span>  <span className="flag">{flags[series.original_language] ? (
                                                        <img src={flags[series.original_language]} alt={series.original_language} />
                                                    ) : (
                                                        series.original_language
                                                    )}</span></div>
                                                    <div><span className="value-title">Voto:</span><span className="rating-star"> {star(series.vote_average)}</span></div>
                                                    {series.overview.length > 0 ? (<><span className="value-title">Overview:</span><span className="overview">{series.overview}</span></>) : (
                                                        <span></span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))};
                            </>
                        ) : (
                            <></>
                        )}
                    </section>
                </div>
            </main>
        </>
    );
};


