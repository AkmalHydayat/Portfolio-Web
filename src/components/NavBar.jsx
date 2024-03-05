import { useState } from "react";
import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const NavBar = ({ menuShow, handleMenuStatus }) => {

  const [lastScrollY, setLastScrollY] = useState(0);
  const [scroll, setScroll] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const navbarMenu = [
    {
      id: 1,
      name: "Home",
      link: "#",
    },
    {
      id: 2,
      name: "About Me",
      link: "#aboutme",
    },
    {
      id: 3,
      name: "Portfolio",
      link: "#portfolio",
    },
    {
      id: 4,
      name: "Contact",
      link: "#contact",
    },
  ];

  const changeBgNavbar = () => {
    if (window.scrollY >= 5) {
      setScroll(true);
      setLastScrollY(window.scrollY);
    } else {
      setScroll(false);
    }
  };

  const visibilityNavbar = () => {
    if (window.scrollY < lastScrollY) {
      setShowNavbar(true);
    } else if (window.scrollY > window.screenY + 200) {
      setShowNavbar(false);
      handleMenuStatus(false);
    }
  };

  window.addEventListener("scroll", changeBgNavbar);
  window.addEventListener("scroll", visibilityNavbar);

  return (
    <div className="relative">
      <motion.div
        animate={{ scale: [0, 1] }}
        transition={{ type: "spring", stiffness: 70 }}
        initial={{ opacity: 1 }}
      >
        <div
          className={`${scroll
            ? "bg-light/95  shadow-md translate-y-0"
            : "bg-light/95 shadow-none -translate-y-0.5"
            } ${showNavbar
              ? "visible translate-y-0 fixed opacity-100 "
              : "invisible fixed opacity-0 -translate-y-1"
            } h-[60px] fixed w-full z-50 top-0 md:h-[70px] transition-all ease-linear `}
        >
          <div
            className={`flex items-center h-[60px] sticky top-0 md:h-[70px] justify-between max-w-[90%] md:max-w-[90%] lg:max-w-[85%] mx-auto`}
          >
            <img
              id="logo"
              loading="lazy"
              src="/Logo.webp"
              alt=""
              className="w-36 md:w-36 lg:w-40 "
            />
            <button
              className="visible w-[30px] md:invisible md:w-0 md:absolute hover:cursor-pointer  p-1"
              onClick={() => {
                handleMenuStatus(!menuShow);
              }}
            >
              <svg viewBox="0 0 15 15">
                <path
                  id="nav-menu"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </button>
            <div
              className={`${menuShow
                ? "visible absolute md:static rounded-xl bg-yellow md:bg-light py-3 md:py-0 opacity-100 h-fit mt-16 md:mt-0  scale-100 top-0  end-2 w-36  text-center md:visible md:top-0 md:end-0 md:z-0  md:w-fit md:text-end md:translate-x-0 md:translate-y-0 md:scale-100 md:opacity-100"
                : "invisible md:visible absolute top-0  md:static rounded-xl md:top-auto bg-yellow md:bg-transparent py-3 md:py-0 h-fit -end-5 md:end-0 -z-10 md:z-0 w-36 md:w-fit text-center md:text-end opacity-0 translate-x-2 md:translate-x-0 -translate-y-5 md:translate-y-0 scale-50 md:scale-100 md:opacity-100"
                } md:block transition-all ease-in-out duration-200`}
            >
              <div className="font-AnticSlab flex flex-col md:mt-0 md:flex-row space-y-1 md:space-y-0 lg:space-x-10 lg:text-xl md:text-lg md:space-x-10 ">
                {navbarMenu.map((navbar) => (
                  <a
                    key={navbar.id}
                    href={navbar.link}
                    className="hover:bg-blue md:hover:bg-transparent hover:text-white font-semibold md:font-medium py-1 md:py-0 md:hover:text-yellow md:hover:font-semibold transition-all ease-in-out"
                  >
                    {navbar.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NavBar;
