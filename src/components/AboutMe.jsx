const AboutMe = () => {
  const tech = [
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
      name: "ReactJs",
      img: "tech/reactjs.png",
    },
    {
      id: 5,
      name: "NodeJs",
      img: "tech/nodejs.png",
    },
    {
      id: 6,
      name: "ExpressJs",
      img: "tech/expressjs.png",
    },
    {
      id: 7,
      name: "MySkills",
      img: "myskills.png",
    },
    {
      id: 8,
      name: "NextJs",
      img: "tech/nextjs.png",
    },
    {
      id: 9,
      name: "Tailwind",
      img: "tech/tailwind.png",
    },
    {
      id: 10,
      name: "Bootstrap",
      img: "tech/bootstrap.png",
    },
    {
      id: 11,
      name: "GitHub",
      img: "tech/github.png",
    },
    {
      id: 12,
      name: "MySql",
      img: "tech/mysql.png",
    },
    {
      id: 13,
      name: "ChakraUi",
      img: "tech/chakraui.png",
    },
  ];

  return (
    <div className="space-y-10 md:space-y-0 pb-10" id="aboutme">
      <div>
        <h1 className="font-Atma text-4xl md:text-4xl text-center">About Me</h1>
        <div className="relative flex justify-center -top-16 -z-10">
          <img src="/head-bg.png" alt="" className="absolute" />
        </div>
      </div>
      <div className="flex flex-col space-y-12 md:flex-row md:space-y-0 md:space-x-10 h-fit md:h-[500px] md:flex md:items-center ">
        <div className="md:flex-1">
          <div className=" md:flex md:items-center md:justify-center md:h-full  ">
            <div className="font-TitiliumWeb text-xl/6 lg:text-2xl/8 text-center md:max-w-[80%] ">
              Passionate and seasoned Web Developer with a strong focus on
              frontend development. Proficient in JavaScript and well-versed in
              all aspects of web technologies. Collaborative team player
              dedicated to delivering efficient, scalable, and visually
              appealing web applications.
            </div>
          </div>
          <div className="relative flex justify-center -inset-y-36 md:-inset-y-60 lg:-inset-y-[240px] -z-10">
            <img
              src="/Ellipse 11.png"
              alt=""
              className="absolute w-40 md:w-60 opacity-60"
            />
          </div>
        </div>
        <div className=" md:flex-1">
          <div className="w-fit gap-3 grid grid-cols-5 items-center place-items-center mx-auto relative ">
            {tech.map((tech) => (
              <div
                className={`
                
                ${
                  tech.id === 1 || tech.id === 13 ? "col-span-5 scale-90 " : ""
                } 
                ${
                  tech.id === 2 || tech.id === 10 ? "col-start-2 scale-90" : ""
                } 
                ${tech.id === 3 ? "scale-95" : ""} 
                ${tech.id === 4 || tech.id === 12 ? "scale-90" : ""} 
                ${tech.id === 5 ? "col-start-1 scale-90" : ""} 
                ${tech.id === 6 ? "scale-95" : ""} 
                ${tech.id === 8 ? "scale-95" : ""} 
                ${tech.id === 9 ? "scale-90" : ""} 
                ${tech.id === 11 ? "scale-95" : ""} 
                ${
                  tech.id === 7
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
                  className={`${
                    tech.id === 7
                      ? "hidden"
                      : "absolute invisible group-hover:-top-4 md:group-hover:-top-5 group-hover:opacity-100 top-5 scale-50 group-hover:scale-100 opacity-0 rounded-md text-xs lg:text-sm bg-gradient-to-tr from-red/90  to-yellow/90 text-black font-AnticSlab group-hover:visible  font-semibold px-2 py-0.5"
                  } transition-all ease-in-out`}
                >
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
          <div className="relative  flex justify-center -inset-y-[340px] -inset-x-[6px] md:-inset-y-[330px] md:-inset-x-[4px] lg:-inset-y-[350px] lg:inset-x-1 -z-10">
            <img
              src="/head-bg.png"
              alt=""
              className="absolute w-80 opacity-80 animate-spin-slow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
