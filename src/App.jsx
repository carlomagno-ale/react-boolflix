import { PopularMoviesProvider } from "./contexts/PopularMoviesContext";
import Home from "./components/Home";

export default function App() {

  return (

    <PopularMoviesProvider>

      <Home />

    </PopularMoviesProvider>
  );
}