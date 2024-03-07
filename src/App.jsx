import { useState, lazy, Suspense } from "react";
import "./index.css";
import Loading from "./components/Loading";
const NavBar = lazy(() => import("./components/NavBar"));
const HomePage = lazy(() => import("./components/HomePage"));
const AboutMe = lazy(() => import("./components/AboutMe"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
function App() {
  const [menuShow, setMenuShow] = useState(false);
  const handleMenuStatus = (status) => {
    setMenuShow(status);
  };
  return (

    <div
      id="container"
      onClick={(e) => {
        if (e.target.id !== "nav-menu" && menuShow === true) {
          setMenuShow(false);
        }
      }}
      className=" overflow-hidden max-w-screen-2xl"
    >
      <Suspense fallback={<Loading />}>
        <NavBar menuShow={menuShow} handleMenuStatus={handleMenuStatus} />
        <div className="max-w-[90%] md:max-w-[90%] lg:max-w-[85%] mx-auto ">
          <HomePage />
          <AboutMe />
          <Portfolio />
          <Contact />
        </div>
        <Footer />
      </Suspense>

    </div>


  );
}

export default App;
