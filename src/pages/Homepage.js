import NavMenu from "./components/NavMenu";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

function Homepage() {
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

export default Homepage;
