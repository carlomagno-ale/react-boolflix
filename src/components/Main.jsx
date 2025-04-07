import { useGlobal } from "../contexts/GlobalContext";

export default function Main() {

    const { movies, seriesTV, cover, star, flags, placeholder, popularMovies, error, errorTV } = useGlobal();

    return (
        <>
            <main>
                <div className="container mb-4">
                    <section className="row g-4 mt-1 justify-content-center">
                        {movies.length > 0 || seriesTV.length > 0 ? (
                            <>
                                <h4 className="text-center search-result">Ecco i risultati della tua ricerca:</h4>
                                {/*MOVIE*/}
                                {movies.map((movie) => (
                                    <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                                        <div className="card border-0 h-100">
                                            {/*crea la cover, se non è presente inserisce il placeholder*/}
                                            <img
                                                src={movie.poster_path ? `${cover}${movie.poster_path}` : placeholder}
                                                alt={`Poster di ${movie.title}`}
                                                className="card-img-top cover"
                                            />
                                            {/*contenuto che si visualizza in overlay*/}
                                            <div className="card-overlay border-0">
                                                <div className="overlay-content">
                                                    <h5 className="card-title">{movie.title}</h5>
                                                    {/*Se i titoli sono uguali non viene mostrata questa voce*/}
                                                    {movie.original_title !== movie.title ? (
                                                        <><span className="value-title">Titolo originale:</span> {movie.original_title}</>
                                                    ) : null}
                                                    {/*genera la bandiera della lingua prendendo le immagini dall'array in flagList*/}
                                                    <div><span className="value-title">Lingua:</span>  <span className="flag">{flags[movie.original_language] ? (
                                                        <img src={flags[movie.original_language]} alt={movie.original_language} />
                                                    ) : (
                                                        movie.original_language
                                                    )}</span></div>
                                                    {/*richiama la funzione star per impostare il numero di stelle*/}
                                                    <div><span className="value-title">Voto:</span><span className="rating-star"> {star(movie.vote_average)}</span></div>
                                                    {/*Se non è presente l'overview non viene mostrata questa voce*/}
                                                    {movie.overview.length > 0 ? (<><span className="value-title">Overview:</span><span className="overview">{movie.overview}</span></>) : (
                                                        <span></span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/*TV*/}
                                {seriesTV.map((series) => (
                                    <div key={series.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <div className="card border-0 h-100">
                                            {/*crea la cover, se non è presente inserisce il placeholder*/}
                                            <img
                                                src={series.poster_path ? `${cover}${series.poster_path}` : placeholder}
                                                alt={`Poster di ${series.name}`}
                                                className="card-img-top cover"
                                            />
                                            <div className="card-overlay border-0">
                                                <div className="overlay-content">
                                                    <h5 className="card-title">{series.name}</h5>
                                                    {series.original_name !== series.name ? (
                                                        <><span className="value-title">Titolo originale:</span> {series.original_name}</>
                                                    ) : null}
                                                    {/*genera la bandiera della lingua prendendo le immagini dall'array in "data"*/}
                                                    <div><span className="value-title">Lingua:</span> <span className="flag">{flags[series.original_language] ? (
                                                        <img src={flags[series.original_language]} alt={series.original_language} />
                                                    ) : (
                                                        series.original_language
                                                    )}</span></div>
                                                    {/*richiama la funzione star per impostare il numero di stelle*/}
                                                    <div><span className="value-title">Voto:</span><span className="rating-star"> {star(series.vote_average)}</span></div>
                                                    {/*Se non è presente l'overview non viene mostrata questa voce*/}
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
                            <>
                                {!error && !errorTV && (
                                    <div className="alert alert-danger text-center" role="alert">
                                        Nessun film o serie trovati
                                    </div>
                                )}
                                <h4 className="section-title text-center">Film in uscita</h4>
                                {popularMovies.map((movie) => (
                                    <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                                        <div className="card border-0 h-100">
                                            {/*crea la cover, se non è presente inserisce il placeholder*/}
                                            <img
                                                src={movie.poster_path ? `${cover}${movie.poster_path}` : placeholder}
                                                alt={`Poster di ${movie.title}`}
                                                className="card-img-top cover"
                                            />
                                            {/*contenuto che si visualizza in overlay*/}
                                            <div className="card-overlay border-0">
                                                <div className="overlay-content">
                                                    <h4 className="card-title">{movie.title}</h4>
                                                    {/*Se i titoli sono uguali non viene mostrata questa voce*/}
                                                    {movie.original_title !== movie.title ? (
                                                        <><span className="value-title">Titolo originale:</span> {movie.original_title}</>
                                                    ) : null}
                                                    {/*genera la bandiera della lingua prendendo le immagini dall'array in flagList*/}
                                                    <div><span className="value-title">Lingua:</span>  <span className="flag">{flags[movie.original_language] ? (
                                                        <img src={flags[movie.original_language]} alt={movie.original_language} />
                                                    ) : (
                                                        movie.original_language
                                                    )}</span></div>
                                                    {/*richiama la funzione star per impostare il numero di stelle*/}
                                                    <div><span className="value-title">Voto:</span><span className="rating-star"> {star(movie.vote_average)}</span></div>
                                                    {/*Se non è presente l'overview non viene mostrata questa voce*/}
                                                    {movie.overview.length > 0 ? (<><span className="value-title">Overview:</span><span className="overview">{movie.overview}</span></>) : (
                                                        <span></span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </section>
                </div>
            </main>
        </>
    );
};


