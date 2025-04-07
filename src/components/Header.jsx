import { useState } from "react";
import { useGlobal } from "../contexts/GlobalContext";

export default function Home() {

    const { handleMovie, handleTV, logo, iconSearch } = useGlobal();
    const [searchText, setSearchText] = useState('');

    return (
        <>
            <header>
                <div className="container">
                    <nav className="navbar navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/">
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
        </>
    )
}