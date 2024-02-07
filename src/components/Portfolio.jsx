import { useRef } from "react";
import { useState } from "react";

const Portfolio = () => {
  const Portfolio = [
    {
      id: 1,
      name: "PosNout",
      img: "posnout.png",
      backgroundColor: "bg-[#8406be]",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, est voluptatibus delectus a sunt molestiae sapienteomnis harum in quibusdam architecto libero.",
      techStack: [
        {
          id: 1,
          name: "JavaScript",
          img: "tech/javascript.png",
        },
        {
          id: 2,
          name: "ReactJs",
          img: "tech/reactjs.png",
        },
        {
          id: 3,
          name: "NodeJs",
          img: "tech/nodejs.png",
        },
        {
          id: 4,
          name: "ExpressJs",
          img: "tech/expressjs.png",
        },
        {
          id: 5,
          name: "Tailwind",
          img: "tech/tailwind.png",
        },
        {
          id: 6,
          name: "GitHub",
          img: "tech/github.png",
        },
        {
          id: 7,
          name: "MySql",
          img: "tech/mysql.png",
        },
        {
          id: 8,
          name: "React Router",
          img: "tech/reactrouter.png",
        },
        {
          id: 9,
          name: "ChartJs",
          img: "tech/chartjs.png",
        },
        // {
        //   id: 10,
        //   name: "ChartJs",
        //   img: "tech/chartjs.png",
        // },
        // {
        //   id: 11,
        //   name: "ChartJs",
        //   img: "tech/chartjs.png",
        // },
        // {
        //   id: 12,
        //   name: "ChartJs",
        //   img: "tech/chartjs.png",
        // },
        // {
        //   id: 13,
        //   name: "ChartJs",
        //   img: "tech/chartjs.png",
        // },
        // {
        //   id: 14,
        //   name: "ChartJs",
        //   img: "tech/chartjs.png",
        // },
        // {
        //   id: 15,
        //   name: "ChartJs",
        //   img: "tech/chartjs.png",
        // },
        // {
        //   id: 16,
        //   name: "ChartJs",
        //   img: "tech/chartjs.png",
        // },
        // {
        //   id: 17,
        //   name: "ChartJs",
        //   img: "tech/chartjs.png",
        // },
        // {
        //   id: 18,
        //   name: "ChartJs",
        //   img: "tech/chartjs.png",
        // },
        // {
        //   id: 19,
        //   name: "ChartJs",
        //   img: "tech/chartjs.png",
        // },
        // {
        //   id: 20,
        //   name: "ChartJs",
        //   img: "tech/chartjs.png",
        // },
      ],
    },
    {
      id: 2,
      name: "Web Profile",
      img: "webprofile.png",
      backgroundColor: "bg-[#E63946]",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, est voluptatibus delectus a sunt molestiae sapienteomnis harum in quibusdam architecto libero.",
      techStack: [
        {
          id: 1,
          name: "JavaScript",
          img: "tech/javascript.png",
        },
        {
          id: 2,
          name: "ReactJs",
          img: "tech/reactjs.png",
        },
        {
          id: 3,
          name: "Tailwind",
          img: "tech/tailwind.png",
        },
        {
          id: 4,
          name: "GitHub",
          img: "tech/github.png",
        },
      ],
    },
    {
      id: 3,
      name: "Diamond Store",
      img: "diamondstore.png",
      backgroundColor: "bg-[#FF5F04]",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, est voluptatibus delectus a sunt molestiae sapienteomnis harum in quibusdam architecto libero.",
      techStack: [
        {
          id: 1,
          name: "HTML",
          img: "tech/html.png",
        },
        {
          id: 2,
          name: "CSS",
          img: "tech/css.png",
        },
        {
          id: 3,
          name: "JavaScript",
          img: "tech/javascript.png",
        },
        {
          id: 4,
          name: "Bootstrap",
          img: "tech/bootstrap.png",
        },
        {
          id: 5,
          name: "GitHub",
          img: "tech/github.png",
        },
      ],
    },
  ];

  const [ScrollPosition, setScrollPosition] = useState(0);
  const [buttonLeft, setButtonLeft] = useState(false);
  const [buttonRight, setButtonRight] = useState(true);
  const containerRef = useRef();
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
    <div className="space-y-10 md:space-y-10" id="portfolio">
      <div>
        <h1 className="font-Atma text-4xl md:text-4xl text-center">
          Portfolio
        </h1>
        <div className="relative flex justify-center -top-16 -z-10">
          <img src="head-bg.png" alt="" className="absolute" />
        </div>
      </div>

      <div className="grid gap-y-8 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16 justify-items-center w-full relative pb-16 md:pb-24">
        {Portfolio.map((project) => (
          <div
            key={project.id}
            className={`${
              project.id === Portfolio.length
                ? "lg:col-start-1 lg:col-span-2"
                : ""
            } border border-blackopacity rounded-lg flex shadow-cus2 h-[300px] sm:h-[400px] w-[300px] sm:w-[430px] justify-center items-center`}
          >
            <img
              src="Background2.svg"
              alt=""
              className=" h-[380px] w-[320px] sm:w-full lg:w-[430px]  md:h-[400px] lg:h-[550px] absolute contrast-[1.9] saturate-[1.7] blur-[24px] rotate-270 brightness-50"
            />
            <div className=" h-full w-full flex flex-col rounded-lg p-2 sm:p-3 ">
              <div
                className={`${project.backgroundColor} sm:h-3/5 w-full rounded-lg mb-2 sm:mb-3 -z-20 `}
              >
                <img
                  src={project.img}
                  alt=""
                  className=" rounded-b-lg  contrast-[1.4] brightness-[0.85] saturate-[1.5] -z-10"
                />
              </div>
              <div className="h-[45%] sm:h-1/3 rounded-lg">
                <div className="h-6 sm:h-8 flex mb-1 sm:mb-2 space-x-1 sm:space-x-2">
                  <div className="font-TitiliumWeb font-bold w-2/5 text-center bg-gray text-lg/3 rounded-t-lg ">
                    <div className="relative text-base top-1 tracking-tighter sm:text-xl sm:top-1">
                      <h2>{project.name}</h2>
                      <div className="absolute h-2 w-[116px] sm:w-[165px] bg-gray -z-10  left-0  bottom-0 sm:-bottom-2"></div>
                      <div className="absolute h-2 w-2 bg-light -z-10 bottom-0 sm:-bottom-2 -right-2 rounded-es-md"></div>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-1 sm:space-x-2 font-Atma items-center w-3/5 ms-2">
                    <div className="bg-yellow w-full h-full rounded-lg relative text-xs sm:text-sm flex justify-center items-center hover:cursor-pointer hover:shadow-sm sm:hover:shadow-md font-normal lg:font-medium">
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
                    </div>
                    <div className="bg-blue w-full h-full rounded-lg text-[#fff] relative text-xs sm:text-sm flex justify-center items-center hover:cursor-pointer hover:shadow-sm sm:hover:shadow-md font-light lg:font-normal">
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
                    </div>
                  </div>
                </div>
                <div className="h-[63%] sm:h-1/2 bg-gray rounded-b-lg rounded-e-lg flex items-center">
                  <div className="text-xs/3 sm:text-sm/4 px-3 py-0.5 font-TitiliumWeb text-justify relative text-pretty">
                    {project.detail}
                  </div>
                </div>
              </div>
              {project.techStack.length > 7 ? (
                <div className=" flex h-[15%] sm:h-1/6 w-full items-center space-x-1 sm:space-x-2 ">
                  <button
                    aria-readonly="true"
                    className={` ${
                      buttonLeft
                        ? "hover:bg-yellow cursor-pointer"
                        : "cursor-default"
                    } rounded-full p-0.5 sm:p-1   transition-colors ease-in-out z-10 `}
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
                    className={` ${
                      buttonRight
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
                <div className="h-[15%] sm:h-1/6 w-full ">
                  <div className="flex w-fit space-x-1 sm:space-x-2 h-full ">
                    {project.techStack.map((tech) => (
                      <div
                        className="bg-gray rounded-xl w-9  sm:w-12 flex items-center justify-center snap-center"
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
            </div>
          </div>
        ))}

        {/* <div className="border border-blackopacity rounded-lg flex shadow-cus2 h-[300px] sm:h-[400px] w-[300px] sm:w-[430px] justify-center items-center">
          <img
            src="Background2.svg"
            alt=""
            className=" h-[380px] w-[320px] sm:w-full lg:w-[430px]  md:h-[400px] lg:h-[550px] absolute contrast-[1.9] saturate-[1.7] blur-[24px] rotate-270 brightness-50"
          />
          <div className=" h-full w-full flex flex-col rounded-lg p-2 sm:p-3 ">
            <div className="bg-[#8406be] sm:h-3/5 w-full rounded-lg mb-2 sm:mb-3 -z-20 ">
              <img
                src="posnout.png"
                alt=""
                className=" rounded-b-lg  contrast-[1.4] brightness-[0.85] saturate-[1.5] -z-10"
              />
            </div>
            <div className="h-[45%] sm:h-1/3 rounded-lg">
              <div className="h-6 sm:h-8 flex mb-1 sm:mb-2 space-x-1 sm:space-x-2">
                <div className="font-TitiliumWeb font-bold w-2/5 text-center bg-gray text-lg/3 rounded-t-lg ">
                  <div className="relative text-lg trac sm:text-xl sm:top-1">
                    <h2>PosNout</h2>
                    <div className="absolute h-2 w-[116px] sm:w-[165px] bg-gray -z-10  left-0  bottom-0 sm:-bottom-2"></div>
                    <div className="absolute h-2 w-2 bg-light -z-10 bottom-0 sm:-bottom-2 -right-2 rounded-es-md"></div>
                  </div>
                </div>
                <div className="flex justify-end space-x-1 sm:space-x-2 font-Atma items-center w-3/5 ms-2">
                  <div className="bg-yellow w-full h-full rounded-lg relative text-xs sm:text-sm flex justify-center items-center hover:cursor-pointer hover:shadow-sm sm:hover:shadow-md font-normal lg:font-medium">
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
                  </div>
                  <div className="bg-blue w-full h-full rounded-lg text-[#fff] relative text-xs sm:text-sm flex justify-center items-center hover:cursor-pointer hover:shadow-sm sm:hover:shadow-md font-light lg:font-normal">
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
                  </div>
                </div>
              </div>
              <div className="h-[63%] sm:h-1/2 bg-gray rounded-b-lg rounded-e-lg flex items-center">
                <div className="text-xs/3 sm:text-sm/4 px-3 py-0.5 font-TitiliumWeb text-justify relative text-pretty">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, est voluptatibus delectus a sunt molestiae
                  sapienteomnis harum in quibusdam architecto libero.
                </div>
              </div>
            </div>
            <div className="h-[15%] sm:h-1/6 flex space-x-1 sm:space-x-2">
              <div className="bg-gray rounded-xl sm:rounded-2xl basis-8 sm:basis-12 flex items-center justify-center">
                <img
                  src="tech/javascript.png"
                  alt=""
                  className="object-cover relative p-2"
                />
              </div>
              <div className="bg-gray rounded-xl sm:rounded-2xl basis-8 sm:basis-12 flex items-center justify-center">
                <img
                  src="tech/reactjs.png"
                  alt=""
                  className="object-cover relative p-2"
                />
              </div>

              <div className="bg-gray rounded-xl sm:rounded-2xl basis-8 sm:basis-12 flex items-center justify-center">
                <img
                  src="tech/nodejs.png"
                  alt=""
                  className="object-cover relative p-2"
                />
              </div>
              <div className="bg-gray rounded-xl sm:rounded-2xl basis-8 sm:basis-12 flex items-center justify-center">
                <img
                  src="tech/expressjs.png"
                  alt=""
                  className="object-cover relative p-2"
                />
              </div>
              <div className="bg-gray rounded-xl sm:rounded-2xl basis-8 sm:basis-12 flex items-center justify-center">
                <img
                  src="tech/tailwind.png"
                  alt=""
                  className="object-cover relative p-2"
                />
              </div>
              <div className="bg-gray rounded-xl sm:rounded-2xl basis-8 sm:basis-12 flex items-center justify-center">
                <img
                  src="tech/mysql.png"
                  alt=""
                  className="object-cover relative p-2"
                />
              </div>
              <div className="bg-gray rounded-xl sm:rounded-2xl basis-8 sm:basis-12 flex items-center justify-center">
                <img
                  src="tech/github.png"
                  alt=""
                  className="object-cover relative p-2"
                />
              </div>
            </div>
          </div>
        </div>

       
        <div className="border border-blackopacity rounded-lg flex shadow-cus2 h-[300px] sm:h-[400px] w-[300px] sm:w-[430px] justify-center items-center">
          <img
            src="Background2.svg"
            alt=""
            className=" h-[380px] w-[320px] sm:w-full lg:w-[430px]  md:h-[400px] lg:h-[550px] absolute contrast-[1.9] saturate-[1.7] blur-[24px] rotate-270 brightness-50"
          />
          <div className=" h-full w-full flex flex-col rounded-lg p-2 sm:p-3 ">
            <div className="bg-[#E63946] sm:h-3/5 w-full rounded-lg mb-2 sm:mb-3 -z-20 ">
              <img
                src="webprofile.png"
                alt=""
                className=" rounded-b-lg  contrast-[1.4] brightness-[0.85] saturate-[1.5] -z-10"
              />
            </div>
            <div className="h-[45%] sm:h-1/3 rounded-lg">
              <div className="h-6 sm:h-8 flex mb-1 sm:mb-2 space-x-1 sm:space-x-2">
                <div className="font-TitiliumWeb font-bold w-2/5 text-center bg-gray text-lg/3 rounded-t-lg ">
                  <div className="relative text-lg tracking-tighter sm:tracking-tight sm:text-xl sm:top-1">
                    <h2>Web Profile</h2>
                    <div className="absolute h-2 w-[116px] sm:w-[165px] bg-gray -z-10  left-0  bottom-0 sm:-bottom-2"></div>
                    <div className="absolute h-2 w-2 bg-light -z-10 bottom-0 sm:-bottom-2 -right-2 rounded-es-md"></div>
                  </div>
                </div>
                <div className="flex justify-end space-x-1 sm:space-x-2 font-Atma items-center w-3/5 ms-2">
                  <div className="bg-yellow w-full h-full rounded-lg relative text-xs sm:text-sm flex justify-center items-center hover:cursor-pointer hover:shadow-sm sm:hover:shadow-md font-normal lg:font-medium">
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
                  </div>
                  <div className="bg-blue w-full h-full rounded-lg text-[#fff] relative text-xs sm:text-sm flex justify-center items-center hover:cursor-pointer hover:shadow-sm sm:hover:shadow-md font-light lg:font-normal">
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
                  </div>
                </div>
              </div>
              <div className="h-[63%] sm:h-1/2 bg-gray rounded-b-lg rounded-e-lg flex items-center">
                <div className="text-xs/3 sm:text-sm/4 px-3 py-0.5 font-TitiliumWeb text-justify relative text-pretty">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, est voluptatibus delectus a sunt molestiae sapiente
                  omnis harum in quibusdam architecto libero.
                </div>
              </div>
            </div>
            <div className="h-[15%] sm:h-1/6 flex space-x-1 sm:space-x-2">
              <div className="bg-gray rounded-xl sm:rounded-2xl basis-8 sm:basis-12 flex items-center justify-center">
                <img
                  src="tech/javascript.png"
                  alt=""
                  className="object-cover relative p-2"
                />
              </div>
              <div className="bg-gray rounded-xl sm:rounded-2xl basis-8 sm:basis-12 flex items-center justify-center">
                <img
                  src="tech/reactjs.png"
                  alt=""
                  className="object-cover relative p-2"
                />
              </div>
              <div className="bg-gray rounded-xl sm:rounded-2xl basis-8 sm:basis-12 flex items-center justify-center">
                <img
                  src="tech/tailwind.png"
                  alt=""
                  className="object-cover relative p-2"
                />
              </div>
              <div className="bg-gray rounded-xl sm:rounded-2xl basis-8 sm:basis-12 flex items-center justify-center">
                <img
                  src="tech/github.png"
                  alt=""
                  className="object-cover relative p-2"
                />
              </div>
            </div>
          </div>
        </div>

    
        <div className="border border-blackopacity rounded-lg flex shadow-cus2 h-[300px] sm:h-[400px] w-[300px] sm:w-[430px] justify-center items-center  lg:col-start-1 lg:col-span-2">
          <img
            src="Background2.svg"
            alt=""
            className=" h-[380px] w-[320px] sm:w-full lg:w-[430px]  md:h-[400px] lg:h-[550px] absolute contrast-[1.9] saturate-[1.7] blur-[24px] rotate-270 brightness-50"
          />
          <div className=" h-full w-full flex flex-col rounded-lg p-2 sm:p-3 ">
            <div className="bg-[#FF5F04] sm:h-3/5 w-full rounded-lg mb-2 sm:mb-3 -z-20 ">
              <img
                src="diamondstore.png"
                alt=""
                className=" rounded-b-lg  contrast-[1.4] brightness-[0.85] saturate-[1.5] -z-10"
              />
            </div>
            <div className="h-[45%] sm:h-1/3 rounded-lg">
              <div className="h-6 sm:h-8 flex mb-1 sm:mb-2 space-x-1 sm:space-x-2">
                <div className="font-TitiliumWeb font-bold w-2/5 text-center bg-gray text-lg/3 rounded-t-lg ">
                  <div className="relative text-base/7 tracking-tighter sm:tracking-tight sm:text-xl sm:top-1">
                    <h2>Diamond Store</h2>
                    <div className="absolute h-2 w-[116px] sm:w-[165px] bg-gray -z-10  left-0  bottom-0 sm:-bottom-2"></div>
                    <div className="absolute h-2 w-2 bg-light -z-10 bottom-0 sm:-bottom-2 -right-2 rounded-es-md"></div>
                  </div>
                </div>
                <div className="flex justify-end space-x-1 sm:space-x-2 font-Atma items-center w-3/5 ms-2">
                  <div className="bg-yellow w-full h-full rounded-lg relative text-xs sm:text-sm flex justify-center items-center hover:cursor-pointer hover:shadow-sm sm:hover:shadow-md font-normal lg:font-medium">
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
                  </div>
                  <div className="bg-blue w-full h-full rounded-lg text-[#fff] relative text-xs sm:text-sm flex justify-center items-center hover:cursor-pointer hover:shadow-sm sm:hover:shadow-md font-light lg:font-normal">
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
                  </div>
                </div>
              </div>
              <div className="h-[63%] sm:h-1/2 bg-gray rounded-b-lg rounded-e-lg flex items-center">
                <div className="text-xs/3 sm:text-sm/4 px-3 py-0.5 font-TitiliumWeb text-justify relative text-pretty">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, est voluptatibus delectus a sunt molestiae sapiente
                  omnis harum in quibusdam architecto libero.
                </div>
              </div>
            </div>
            <div className="h-[15%] sm:h-1/6 flex space-x-1 sm:space-x-2">
              <div className="bg-gray rounded-xl sm:rounded-2xl basis-8 sm:basis-12 flex items-center justify-center">
                <img
                  src="tech/html.png"
                  alt=""
                  className="object-cover relative p-2"
                />
              </div>
              <div className="bg-gray rounded-xl sm:rounded-2xl basis-8 sm:basis-12 flex items-center justify-center">
                <img
                  src="tech/css.png"
                  alt=""
                  className="object-cover relative p-2"
                />
              </div>
              <div className="bg-gray rounded-xl sm:rounded-2xl basis-8 sm:basis-12 flex items-center justify-center">
                <img
                  src="tech/javascript.png"
                  alt=""
                  className="object-cover relative p-2"
                />
              </div>
              <div className="bg-gray rounded-xl sm:rounded-2xl basis-8 sm:basis-12 flex items-center justify-center">
                <img
                  src="tech/bootstrap.png"
                  alt=""
                  className="object-cover relative p-2"
                />
              </div>
              <div className="bg-gray rounded-xl sm:rounded-2xl basis-8 sm:basis-12 flex items-center justify-center">
                <img
                  src="tech/github.png"
                  alt=""
                  className="object-cover relative p-2"
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
