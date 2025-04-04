import { usePopularMovies } from "../contexts/PopularMoviesContext";

export default function Home() {

    const { popularMovies } = usePopularMovies();
    console.log(popularMovies)


    return (
        <>


        </>
    );
}

