import NavMenu from "./components/NavMenu";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import React from "react";

function App() {
  return (
    <>
      <NavMenu />
      <Home />
      <Portfolio />
      <Clients />
      <Footer />
    </>
  );
}

export default App;
