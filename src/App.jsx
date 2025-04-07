import { MoviesProvider } from "./contexts/MoviesContext";
import Home from "./components/Main";
import Header from "./components/Header"

export default function App() {

  return (

    <MoviesProvider>

      <Header />
      <Home />

    </MoviesProvider>
  );
}