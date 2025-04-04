import { useState } from "react";
import { useMovies } from "../contexts/MoviesContext";

export default function Home() {

    const { movies } = useMovies();
    console.log(movies)

    const [searchText, setSearchText] = useState('')

    return (

        <>
            <div>
                <input
                    type="text"
                    placeholder="Cerca un film"
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button onClick={() => movieSearch(searchText)}>
                    Search
                </button>
            </div>

        </>
    );


}


