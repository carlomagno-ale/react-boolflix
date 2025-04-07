import { GlobalProvider } from "./contexts/GlobalContext";
import Main from "./components/Main";
import Header from "./components/Header"

export default function App() {

  return (

    <GlobalProvider>

      <Header />
      <Main />

    </GlobalProvider>
  );
}