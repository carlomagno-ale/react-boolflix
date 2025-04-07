import { GlobalProvider } from "./contexts/GlobalContext";
import Home from "./components/Main";
import Header from "./components/Header"

export default function App() {

  return (

    <GlobalProvider>

      <Header />
      <Home />

    </GlobalProvider>
  );
}