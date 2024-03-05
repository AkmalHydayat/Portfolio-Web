/* eslint-disable react-hooks/rules-of-hooks */
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { useState } from "react";

const Portfolio = () => {
  const Portfolio = [
    {
      id: 1,
      name: "PosNout",
      img: "posnout.webp",
      url: "https://posnout-static.vercel.app/",
      git: "https://github.com/AkmalHydayat/PosNout---Static",
      backgroundColor: "bg-[#8406be]",
      detail:
        "Point Of Sale (POS) Web Application that provides an integrated solution for sales management and business transactions. With an intuitive interface and advanced features, this application helps optimize sales operations, record inventory, and improve your company's financial efficiency.",
      techStack: [
        {
          id: 1,
          name: "JavaScript",
          img: "tech/javascript.webp",
        },
        {
          id: 2,
          name: "ReactJs",
          img: "tech/reactjs.webp",
        },
        {
          id: 3,
          name: "NodeJs",
          img: "tech/nodejs.webp",
        },
        {
          id: 4,
          name: "ExpressJs",
          img: "tech/expressjs.webp",
        },
        {
          id: 5,
          name: "Tailwind",
          img: "tech/tailwind.webp",
        },
        {
          id: 6,
          name: "GitHub",
          img: "tech/github.webp",
        },
        {
          id: 7,
          name: "MySql",
          img: "tech/mysql.webp",
        },
        {
          id: 8,
          name: "React Router",
          img: "tech/reactrouter.webp",
        },
        {
          id: 9,
          name: "ChartJs",
          img: "tech/chartjs.webp",
        },

      ],
    },
    {
      id: 2,
      name: "Web Profile",
      img: "webprofile.webp",
      url: "https://akmalhydayat.vercel.app/",
      git: "https://github.com/AkmalHydayat/Portfolio-Web",
      backgroundColor: "bg-[#E63946]",
      detail:
        "Aesthetic and functional in design, this portfolio provides an in-depth look at a person's skills, projects and experience in the world of work. With a responsive display, this portfolio provides a seamless user experience on both computer and mobile devices.",
      techStack: [
        {
          id: 1,
          name: "JavaScript",
          img: "tech/javascript.webp",
        },
        {
          id: 2,
          name: "ReactJs",
          img: "tech/reactjs.webp",
        },
        {
          id: 3,
          name: "Tailwind",
          img: "tech/tailwind.webp",
        },
        {
          id: 4,
          name: "Framer Motion",
          img: "tech/framermotion.webp",
        },
        {
          id: 5,
          name: "GitHub",
          img: "tech/github.webp",
        },
      ],
    },
    {
      id: 3,
      name: "Diamond Store",
      img: "diamondstore.webp",
      url: "https://akmalhydayat.github.io/Diamond-Store/",
      git: "https://github.com/AkmalHydayat/Diamond-Store",
      backgroundColor: "bg-[#FF5F04]",
      detail:
        "A prototype diamond store that gamers use to purchase game credits. The fast search feature, automatic price calculator, and integration of flexible payment methods as well as a responsive and intuitive interface will certainly provide a fast and efficient purchasing experience for gamers.",
      techStack: [
        {
          id: 1,
          name: "HTML",
          img: "tech/html.webp",
        },
        {
          id: 2,
          name: "CSS",
          img: "tech/css.webp",
        },
        {
          id: 3,
          name: "JavaScript",
          img: "tech/javascript.webp",
        },
        {
          id: 4,
          name: "Bootstrap",
          img: "tech/bootstrap.webp",
        },
        {
          id: 5,
          name: "GitHub",
          img: "tech/github.webp",
        },
      ],
    },
  ];

  const containerRef = useRef();
  const headRef = useRef(null);
  const headIsInView = useInView(headRef)
  const portfolioRefs = Portfolio.map(() => useRef(null));
  const portfolioIsInView = Portfolio.map(item => useInView(portfolioRefs[item.id - 1]));

  const [ScrollPosition, setScrollPosition] = useState(0);
  const [buttonLeft, setButtonLeft] = useState(false);
  const [buttonRight, setButtonRight] = useState(true);


  const handleScroll = (scrollAmout) => {
    let maxWidth = 0;
    const lengthStack = containerRef.current.children[0].children.length;
    const newScrollPositon = ScrollPosition + scrollAmout;

    if (lengthStack <= 10) {
      maxWidth += 220;
    } else if (lengthStack <= 14) {
      maxWidth += 440;
    } else if (lengthStack <= 18) {
      maxWidth += 670;
    } else if (lengthStack <= 20) {
      maxWidth += 890;
    }

    if (newScrollPositon <= 0) {
      setScrollPosition(0);
      setButtonLeft(false);
      setButtonRight(true);
    } else if (newScrollPositon >= maxWidth) {
      setScrollPosition(maxWidth);
      setButtonLeft(true);
      setButtonRight(false);
    } else {
      setScrollPosition(newScrollPositon);
      setButtonLeft(true);
      setButtonRight(true);
    }

    containerRef.current.scrollLeft = newScrollPositon;
  };

  return (
    <div className="space-y-10 md:space-y-10 pt-8 pb-8 mt-10 md:pt-5 lg:pt-8 md:pb-0 md:mt-0" id="portfolio">
      <div>
        <motion.div
          ref={headRef}
          animate={{
            scale: headIsInView ? [0, 1] : 0,
            opacity: headIsInView ? 1 : 0
          }}
          transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
          initial={{ opacity: 0.1 }}

        >
          <h1 className="font-Atma text-4xl md:text-4xl text-center">
            Portfolio
          </h1>

        </motion.div>
        <motion.div
          ref={containerRef}
          animate={{
            scale: headIsInView ? [0, 1] : 0,
            opacity: headIsInView ? 1 : 0
          }}
          transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
          initial={{ opacity: 0.1 }} className="relative flex justify-center -top-16 -z-10">
          <img src="/head-bg.webp" alt="" className="absolute" />
        </motion.div>
      </div>

      <div className="grid gap-y-8 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16 justify-items-center w-full relative pb-3 md:pb-24">
        {Portfolio.map((project, index) => (
          <motion.div
            ref={portfolioRefs[index]}
            animate={{
              scale: portfolioIsInView[index] ? [0, 1] : 0,
              opacity: portfolioIsInView[index] ? 1 : 0
            }}
            transition={{ type: "spring", stiffness: 50, delay: 0.1 }}
            initial={{ opacity: 0.1 }}
            key={project.id}
            className={`${project.id === Portfolio.length
              ? "lg:col-start-1 lg:col-span-2"
              : ""
              } border border-blackopacity rounded-lg flex shadow-cus2 h-[320px] sm:h-[430px] w-[300px] sm:w-[430px] justify-center items-center`}
          >
            <img
              src="Background2.webp"
              alt=""
              className=" h-[410px] w-[400px] sm:w-[500px] sm:h-[500px]  lg:w-[550px] delay-0 lg:h-[550px] opacity-60 brightness-[0.9] contrast-[1.1] absolute"
            />
            <div className=" h-full  w-full flex flex-col p-2 sm:p-3 rounded-lg">
              <div className="h-full">
                <div className={`${project.backgroundColor} h-[45%] sm:h-[55%] w-full rounded-lg -z-20`}
                >
                  <img
                    src={project.img}
                    alt=""
                    className=" rounded-b-lg h-full w-full -z-10"
                  />
                </div>
                <div className="h-[40%]  sm:h-[33%] rounded-lg pt-1.5 sm:pt-2 sm:pb-1.5">
                  <div className="h-[25%] sm:h-[28%] flex space-x-1">
                    <div className="font-TitiliumWeb font-bold w-2/5 text-center bg-gray text-lg/3 rounded-t-lg ">
                      <div className="relative">
                        <h2 className="relative text-base top-1 tracking-tighter sm:text-xl sm:top-1">{project.name}</h2>
                        <div className="absolute h-[10px] w-[120px] sm:w-[165px] bg-gray -z-10  left-0 sm:left-2  -bottom-1.5 sm:-bottom-2"></div>
                        <div className="absolute h-4 w-4 bg-light -z-10 -bottom-1 sm:-bottom-1.5 -right-4 sm:-right-4 rounded-es-lg"></div>
                      </div>
                    </div>
                    <div className="flex justify-end space-x-1 font-Atma items-center w-3/5 mb-1 sm:mb-[px]">
                      <button
                        aria-label="Button Live Preview"
                        onClick={() =>
                          project.url ? window.open(
                            project.url,
                            "_blank"
                          ) : null
                        } className="bg-yellow w-full h-full rounded-md relative text-xs sm:text-sm flex justify-center items-center hover:cursor-pointer hover:shadow-sm sm:hover:shadow-md font-normal lg:font-medium">
                        Live Preview
                        <span className="ms-1 sm:ms-2">
                          <svg
                            fill="currentColor"
                            className=" w-[10px] sm:w-[14px]"
                            viewBox="0 0 15 15"
                          >
                            <path d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                          </svg>
                        </span>
                      </button>
                      <button
                        aria-label="Button Source Code"
                        onClick={() =>
                          project.git ? window.open(
                            project.git,
                            "_blank"
                          ) : null
                        } className={` ${project.git ? "bg-blue hover:cursor-pointer hover:shadow-sm sm:hover:shadow-md" : "bg-slate-700 contrast-75 hover:cursor-default"}  w-full h-full rounded-lg text-[#fff] relative text-xs sm:text-sm flex justify-center items-center   font-light lg:font-normal`}>
                        Source Code
                        <span className="ms-1 sm:ms-2">
                          <svg
                            fill="currentColor"
                            className=" w-[10px] sm:w-[14px]"
                            viewBox="0 0 16 15"
                          >
                            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="h-[75%] sm:h-[72%] bg-gray rounded-b-lg rounded-e-lg flex items-center  sm:pt-0">
                    <div className="text-xs/3 sm:text-sm/4 px-3 py-0.5 font-TitiliumWeb text-justify ">
                      {project.detail}
                    </div>
                  </div>
                </div>
                {project.techStack.length > 7 ? (
                  <div className="pt-1.5 flex items-center h-[15%] sm:h-[12%] w-full space-x-1 sm:space-x-2 ">
                    <button
                      aria-label="Button Scroll Tech Stack"
                      className={` ${buttonLeft
                        ? "hover:bg-yellow cursor-pointer"
                        : "cursor-default"
                        } rounded-full p-0.5 sm:p-1 transition-colors ease-in-out z-10 `}
                      onClick={() => handleScroll(-280)}
                    >
                      <svg
                        className="w-3.5 h-3.5 sm:w-5 sm:h-5 "
                        fill={buttonLeft ? "black" : "gray"}
                        viewBox="0 0 18 16"
                      >
                        <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                      </svg>
                    </button>
                    <div
                      ref={containerRef}
                      className="project-container overflow-y-clip overflow-x-scroll no-scrollbar scroll-smooth"
                    >
                      <div className="flex w-fit  space-x-1 sm:space-x-2 ">
                        {project.techStack.map((tech) => (
                          <div
                            className="bg-gray rounded-xl w-9 sm:w-12 flex  items-center justify-center snap-center"
                            key={tech.id}
                          >
                            <img
                              src={tech.img}
                              alt={tech.name}
                              className="object-cover relative p-2 w-full "
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <button
                      aria-label="Button Scroll Tech Stack"
                      className={` ${buttonRight
                        ? "hover:bg-yellow cursor-pointer"
                        : "cursor-default"
                        } rounded-full p-0.5 sm:p-1   transition-colors ease-in-out z-10 `}
                      onClick={() => handleScroll(224)}
                    >
                      <svg
                        className="w-3.5 h-3.5 sm:w-5 sm:h-5 "
                        fill={buttonRight ? "black" : "gray"}
                        viewBox="0 0 14 16"
                      >
                        <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                      </svg>
                    </button>
                  </div>
                ) : (

                  <div className="pt-1.5 flex items-center h-[15%]  sm:h-[12%] w-full space-x-1 sm:space-x-2 ">

                    <div className="flex w-fit  space-x-1 sm:space-x-2 ">
                      {project.techStack.map((tech) => (
                        <div
                          className="bg-gray rounded-xl w-9 sm:w-12 flex  items-center justify-center snap-center"
                          key={tech.id}
                        >
                          <img
                            src={tech.img}
                            alt={tech.name}
                            className="object-cover relative p-2 w-full "
                          />
                        </div>
                      ))}
                    </div>
                  </div>


                )}
              </div></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
