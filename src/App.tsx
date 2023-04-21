import NavMenu from "./components/NavMenu";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollToTopButton";
import React from "react";
import CountUpTimer from "./components/CountUpTimer";

function App() {
  return (
    <>
      <NavMenu />
      <Home />
      <CountUpTimer />
      <Portfolio />
      <Clients />
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
