/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
  return (
    <div className="space-y-10 md:space-y-12" id="contact">
      <div>
        <h1 className="font-Atma text-4xl md:text-4xl text-center">Contact</h1>
        <div className="relative flex justify-center -top-16 -z-10">
          <img src="/head-bg.png" alt="" className="absolute" />
        </div>
      </div>
      <div className="flex flex-col space-y-12 items-center mx-auto pb-10">
        <img
          src="/contact-photo.JPG"
          alt=""
          className=" object-cover w-[200px] h-[200px] md:w-[240px] lg:w-[270px] md:h-[240px] lg:h-[270px] rounded-full"
        />
        <div className="text-center space-y-4 w-[80%] md:w-[60%] lg:w-[45%]">
          <div>
            <h1 className="font-Atma text-4xl font-medium md:font-semibold">
              Let's Talk With Me!
            </h1>
            <div className="relative  -z-10">
              <img
                src="/Ellipse 11.png"
                alt=""
                className="absolute -top-44 -start-12 w-72 opacity-50 "
              />
            </div>
            <div className="relative  -z-10">
              <img
                src="/Ellipse 14.png"
                alt=""
                className="absolute -top-28 -end-16 w-80 opacity-90 "
              />
            </div>
          </div>
          <div>
            <h3 className="relative font-TitiliumWeb text-lg/5 lg:text-xl/5 ">
              I am Always open to discuss your project, improve your online
              presence or help with your UI/UX design
            </h3>
            <div className="relative  -z-10">
              <img
                src="/head-bg.png"
                alt=""
                className="absolute top-6 start-8 sm:top-6 sm:start-20 w-28 opacity-50 blur-sm "
              />
              <img
                src="/head-bg.png"
                alt=""
                className="absolute top-2 end-9 sm:top-2 sm:end-20 w-28 opacity-50 blur-sm "
              />
            </div>
          </div>
        </div>
        <div className="  flex space-x-3 lg:space-x-5 justify-center">
          <button
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/u/0/?fs=1&tf=1&view=cm&source=mailto&to=akmalhydayat69@gmail.com",
                "_blank"
              )
            }
            className=" shadow-cus bg-light/60 rounded-xl sm:rounded-2xl basis-14 lg:basis-16 flex items-center justify-center  hover:scale-105 transition-transform ease-in-out hover:cursor-pointer"
          >
            <img
              src="/gmail.png"
              alt=""
              className="relative object-cover p-2.5"
            />
          </button>
          <button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/akmal-hydayat/",
                "_blank"
              )
            }
            className=" shadow-cus bg-light/60 rounded-xl sm:rounded-2xl basis-14 lg:basis-16 flex items-center justify-center hover:scale-105 transition-transform ease-in-out hover:cursor-pointer"
          >
            <img
              src="/linkedin.png"
              alt=""
              className="object-cover relative p-2.5"
            />
          </button>
          <div className=" shadow-cus bg-light/60 rounded-xl sm:rounded-2xl basis-14 lg:basis-16 flex items-center justify-center hover:scale-105 transition-transform ease-in-out hover:cursor-pointer">
            <img
              src="instagram.png"
              alt=""
              className="object-cover relative p-2.5"
            />
          </div>
          <button
            onClick={() => window.open("https://wa.me/088271743968", "_blank")}
            className=" shadow-cus bg-light/60 rounded-xl sm:rounded-2xl basis-14 lg:basis-16 flex items-center justify-center hover:scale-105 transition-transform ease-in-out hover:cursor-pointer"
          >
            <img src="wa2.png" alt="" className="object-cover relative p-2.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
