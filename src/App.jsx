import { useState } from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import "./index.css";

function App() {
  const [menuShow, setMenuShow] = useState(false);
  const handleMenuStatus = (status) => {
    setMenuShow(status);
  };
  return (
    <>
      <div
        id="container"
        onClick={(e) => {
          if (e.target.id !== "nav-menu" && menuShow === true) {
            setMenuShow(false);
          }
        }}
        className=" overflow-hidden "
      >
        <NavBar menuShow={menuShow} handleMenuStatus={handleMenuStatus} />
        <div className="max-w-[90%] md:max-w-[90%] lg:max-w-[85%] mx-auto space-y-5 ">
          <HomePage />
          <AboutMe />
          <Portfolio />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
