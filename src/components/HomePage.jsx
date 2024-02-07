/* eslint-disable react/no-unescaped-entities */
const HomePage = () => {
  return (
    <div
      id="homepage"
      className="h-[550px]  flex items-center flex-col  md:flex-row md:justify-between mt-28 md:mt-0 lg:my-14"
    >
      <div className=" md:order-2 md:w-1/2 lg:w-1/3 flex md:justify-center lg:justify-center">
        <img
          src="/Photo.png"
          alt=""
          className="w-[250px] sm:w-[250px] md:w-[250px] lg:w-[300px]   md:relative md:-end-8 lg:-end-0 "
        />
      </div>

      <div className="text-center md:text-start space-y-6 lg:space-y-10 md:order-1 md:w-2/3 lg:w-2/3 relative z-10 ">
        <div className="flex justify-center md:justify-start ">
          <h2 className="tracking-tighter font-Atma text-5xl md:text-6xl lg:text-[65px] ">
            Hello There
          </h2>
          <div className="animate-wiggleUpdate text-5xl md:text-6xl lg:text-[65px] -mt-2">
            👋
          </div>
        </div>
        <div className="font-Acme text-4xl/none md:text-5xl/none lg:text-[65px] relative tracking-tight">
          <h2>
            I'm <span className="text-yellow">Akmal</span>,
          </h2>
          <h2>Frontend Developer</h2>
          <h5 className="font-TitiliumWeb px-10 mt-2 md:mt-1 font-light lg:font-extralight text-[17px]/none md:text-[17px]/none lg:text-[24px] sm:px-28 md:px-0 md:w-96 lg:w-[500px] ">
            Building Bridges Between Design and Development. Designing
            Tomorrow's Web Today.
          </h5>
          <div className="relative flex justify-center -top-36 md:justify-start md:start-14 md:-top-44 lg:-top-56 lg:start-28 -z-10">
            {/* <img src="/head-bg.png" alt="" className=" " /> */}
            <img
              // src="/head-bg.png"
              src="/Ellipse 11.png"
              alt=""
              // className="absolute -bottom-12 start-40 w-48 sm:start-56 sm:w-54 md:-bottom-20 lg:-bottom-24
              // md:w-64 md:start-12 lg:start-12 lg:w-80
              // z-10"
              className="absolute w-48 md:w-56 lg:w-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
