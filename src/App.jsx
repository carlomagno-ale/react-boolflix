import { MoviesProvider } from "./contexts/MoviesContext";
import Home from "./components/Home";

export default function App() {

  return (

    <MoviesProvider>

      <Home />

    </MoviesProvider>
  );
}