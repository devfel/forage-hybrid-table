import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { FooterFelizardo } from "./components/FooterFelizardo";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
      <FooterFelizardo />
    </>
  );
}
