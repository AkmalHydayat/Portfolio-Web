
import { motion, useInView } from "framer-motion";
// import { useEffect } from "react";
import { useRef } from "react";

const AboutMe = () => {
  const SectionHeadRef = useRef(null);
  const skillRef = useRef(null);
  const sectionHeadIsInView = useInView(SectionHeadRef)
  const skillIsInView = useInView(skillRef)

  const tech = [
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
      name: "ReactJs",
      img: "tech/reactjs.webp",
    },
    {
      id: 5,
      name: "NodeJs",
      img: "tech/nodejs.webp",
    },
    {
      id: 6,
      name: "ExpressJs",
      img: "tech/expressjs.webp",
    },
    {
      id: 7,
      name: "MySkills",
      img: "myskills.webp",
    },
    {
      id: 8,
      name: "NextJs",
      img: "tech/nextjs.webp",
    },
    {
      id: 9,
      name: "Tailwind",
      img: "tech/tailwind.webp",
    },
    {
      id: 10,
      name: "Bootstrap",
      img: "tech/bootstrap.webp",
    },
    {
      id: 11,
      name: "GitHub",
      img: "tech/github.webp",
    },
    {
      id: 12,
      name: "MySql",
      img: "tech/mysql.webp",
    },
    {
      id: 13,
      name: "Figma",
      img: "tech/figma.webp",
    },
  ];

  return (
    <div

      className="space-y-10 md:space-y-0 relative pt-10 pb-8 mt-14 md:pt-10 lg:pt-8 md:pb-0 md:mt-0 lg:mt-5" id="aboutme">
      <div>
        <motion.div
          ref={SectionHeadRef}
          animate={{
            scale: sectionHeadIsInView ? [0, 1] : 0,
            opacity: sectionHeadIsInView ? 1 : 0
          }}
          transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
          initial={{ opacity: 0.1 }}

        >
          <h1 className="font-Atma text-4xl md:text-4xl text-center">
            About Me
          </h1>

        </motion.div>
        <motion.div
          ref={SectionHeadRef}
          animate={{
            scale: sectionHeadIsInView ? [0, 1] : 0,
            opacity: sectionHeadIsInView ? 1 : 0
          }}
          transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
          initial={{ opacity: 0.1 }}
          className="relative flex justify-center -top-16 -z-10">
          <img src="/head-bg.webp" alt="" className="absolute" />
        </motion.div>


      </div>
      <div className="flex flex-col space-y-12 md:flex-row md:space-y-0 md:space-x-10 h-fit md:h-[500px] md:flex md:items-center ">
        <div className="md:flex-1">
          <motion.div
            animate={{
              scale: skillIsInView ? [0, 1] : 0,
              opacity: skillIsInView ? 1 : 0
            }}
            transition={{ type: "spring", stiffness: 60, delay: 0.4 }}
            initial={{ opacity: 0 }}
            className="mx-auto  flex flex-col items-center justify-center md:h-full  ">
            <div className="font-TitiliumWeb text-xl/6 lg:text-2xl/8 text-center md:max-w-[80%] ">
              Passionate and seasoned Web Developer with a strong focus on
              frontend development. Proficient in JavaScript and well-versed in
              all aspects of web technologies. Collaborative team player
              dedicated to delivering efficient, scalable, and visually
              appealing web applications.
            </div>
            <button onClick={() => window.open(
              "https://drive.google.com/file/d/1foOeu2zhiDupeuTZ-jhGpUyghlp7pyR_/view",
              "_blank"
            )} className="flex space-x-3 w-fit items-center shadow-cus font-Atma mt-8 text-xl/6 lg:text-2xl/7 text-center bg-yellow px-3 py-1.5 rounded-md hover:scale-[1.02] transition-all ease-in-out group">
              <div className="">View Resume</div>
              <div className="w-[20px] h-[20px] animate-BounceCos">
                <svg viewBox="0 0 600 600" fill="">
                  <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                </svg>

              </div>
            </button>
          </motion.div>
          <motion.div

            animate={{
              scale: skillIsInView ? [0, 1] : 0,
              opacity: skillIsInView ? 1 : 0
            }}
            transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
            initial={{ opacity: 0 }}
            className="relative flex justify-center -inset-y-[200px] md:-inset-y-72 lg:-inset-y-[310px] -z-10">
            <img
              src="/Ellipse 11.webp"
              alt=""
              className="absolute w-40 md:w-60 opacity-60"
            />
          </motion.div>
        </div>
        <div ref={skillRef} className=" md:flex-1" >
          <motion.div

            animate={{
              scale: skillIsInView ? [0, 1] : 0,
              opacity: skillIsInView ? 1 : 0
            }}
            transition={{ type: "spring", stiffness: 80, delay: 0.4 }}
            initial={{ opacity: 0 }}
            className="w-fit gap-3 grid grid-cols-5 items-center place-items-center mx-auto relative ">
            {tech.map((tech) => (
              <div
                className={`
                
                ${tech.id === 1 || tech.id === 13 ? "col-span-5 scale-90 " : ""
                  } 
                ${tech.id === 2 || tech.id === 10 ? "col-start-2 scale-90" : ""
                  } 
                ${tech.id === 3 ? "scale-95" : ""} 
                ${tech.id === 4 || tech.id === 12 ? "scale-90" : ""} 
                ${tech.id === 5 ? "col-start-1 scale-90" : ""} 
                ${tech.id === 6 ? "scale-95" : ""} 
                ${tech.id === 8 ? "scale-95" : ""} 
                ${tech.id === 9 ? "scale-90" : ""} 
                ${tech.id === 11 ? "scale-95" : ""} 
                ${tech.id === 7
                    ? "scale-[1.2] lg:scale-[1.2] md:scale-[1.1] p-1 bg-yellow hover:scale-[1.2]  animate-wiggleSlow"
                    : ""
                  } 
                 shadow-cus bg-light/60 rounded-xl sm:rounded-xl hover:scale-105 transition-transform ease-in-out  w-[65px] md:w-[60px] lg:w-[70px] h-[65px] md:h-[60px] lg:h-[70px] flex justify-center items-center relative group`}
                key={tech.id}
              >
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="relative object-cover p-2.5 "
                />
                <div
                  className={`${tech.id === 7
                    ? "hidden"
                    : "absolute invisible group-hover:-top-4 md:group-hover:-top-5 group-hover:opacity-100 top-5 scale-50 group-hover:scale-100 opacity-0 rounded-md text-xs lg:text-sm bg-gradient-to-tr from-red/90  to-yellow/90 text-black font-AnticSlab group-hover:visible  font-semibold px-2 py-0.5"
                    } transition-all ease-in-out`}
                >
                  {tech.name}
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            animate={{
              scale: skillIsInView ? [0, 1] : 0,
              opacity: skillIsInView ? 1 : 0
            }}
            transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
            initial={{ opacity: 0 }}
            className="relative  flex justify-center -inset-y-[340px] -inset-x-[6px] md:-inset-y-[330px] md:-inset-x-[4px] lg:-inset-y-[350px] lg:inset-x-1 -z-10">
            <img
              src="/head-bg.webp"
              alt=""
              className="absolute w-80 opacity-80 animate-spin-slow"
            />
          </motion.div>
        </div>
      </div>
    </div >
  );
};

export default AboutMe;
