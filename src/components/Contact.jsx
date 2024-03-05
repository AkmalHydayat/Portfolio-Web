import { useInView, motion } from "framer-motion";
import { useRef } from "react";

/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
  const ContactList = [
    {
      id: 1,
      name: "Gmail",
      img: "/gmail.webp",
      url: "https://mail.google.com/mail/u/0/?fs=1&tf=1&view=cm&source=mailto&to=akmalhydayat69@gmail.com",
      delay: "0.6"
    },
    {
      id: 2,
      name: "LinkedIn",
      img: "/linkedin.webp",
      url: "https://www.linkedin.com/in/akmal-hydayat/",
      delay: "0.7"
    },
    {
      id: 3,
      name: "GitHub",
      img: "/tech/github.webp",
      url: "https://github.com/AkmalHydayat",
      delay: "0.8"
    },
    {
      id: 4,
      name: "WhatsApp",
      img: "/wa2.webp",
      url: "https://wa.me/088271743968",
      delay: "0.9"
    },

  ];
  const SectionHeadRef = useRef(null);
  const BodySectionRef = useRef(null);
  const sectionHeadIsInView = useInView(SectionHeadRef)
  const bodySectionIsInView = useInView(BodySectionRef)
  return (
    <div ref={SectionHeadRef} className="space-y-10 md:space-y-12 pt-8 mt-10 md:pt-5 md:mt-0" id="contact">
      <div>
        <motion.div
          animate={{
            scale: sectionHeadIsInView ? [0, 1] : 0,
            opacity: sectionHeadIsInView ? 1 : 0
          }}
          transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
          initial={{ opacity: 0.1 }}

        >
          <h1 className="font-Atma text-4xl md:text-4xl text-center">
            Contact
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
      <div className="flex flex-col space-y-12 items-center mx-auto pb-10">
        <motion.div
          ref={SectionHeadRef}
          animate={{
            scale: sectionHeadIsInView ? [0, 1] : 0,
            opacity: sectionHeadIsInView ? 1 : 0
          }}
          transition={{ type: "spring", stiffness: 60, delay: 0.5 }}
          initial={{ opacity: 0.1 }}>
          <img
            src="/contact-photo.webp"
            alt=""
            className=" object-cover w-[200px] h-[200px] md:w-[240px] lg:w-[270px] md:h-[240px] lg:h-[270px] rounded-full"
          />
        </motion.div>
        <div
          ref={BodySectionRef}
          className="text-center space-y-4 w-[80%] md:w-[60%] lg:w-[45%]">
          <motion.h1
            animate={{
              x: bodySectionIsInView ? 0 : -200,
              opacity: bodySectionIsInView ? 1 : 0
            }}
            transition={{ type: "spring", stiffness: 60, delay: 0.5 }}
            initial={{ opacity: 0.1 }}
            className="font-Atma text-4xl font-medium md:font-semibold">
            Let's Talk With Me!
          </motion.h1>
          <motion.div
            animate={{
              scale: bodySectionIsInView ? [0, 1] : 0,
              opacity: bodySectionIsInView ? 1 : 0
            }}
            transition={{ type: "spring", stiffness: 60, delay: 0.5 }}
            initial={{ opacity: 0.1 }}>
            <div className="relative  -z-10">
              <img
                src="/Ellipse 11.webp"
                alt=""
                className="absolute -top-44 -start-12 w-72 opacity-50 "
              />
            </div>
            <div className="relative  -z-10">
              <img
                src="/Ellipse 14.webp"
                alt=""
                className="absolute -top-28 -end-16 w-80 opacity-90 "
              />
            </div>
          </motion.div>
          <div>
            <motion.div
              animate={{
                x: bodySectionIsInView ? 0 : 200,
                opacity: bodySectionIsInView ? 1 : 0
              }}
              transition={{ type: "spring", stiffness: 60, delay: 0.5 }}
              initial={{ opacity: 0.1 }}
              className="relative font-TitiliumWeb text-lg/5 lg:text-xl/5 ">
              I am Always open to discuss your project, improve your online
              presence or help with your UI/UX design
            </motion.div>
            <motion.div
              animate={{
                scale: bodySectionIsInView ? [0, 1] : 0,
                opacity: bodySectionIsInView ? 1 : 0
              }}
              transition={{ type: "spring", stiffness: 60, delay: 0.5 }}
              initial={{ opacity: 0.1 }}
              className="relative  -z-10">
              <img
                src="/head-bg.webp"
                alt=""
                className="absolute top-6 start-8 sm:top-6 sm:start-20 w-28 opacity-50 blur-sm "
              />
              <img
                src="/head-bg.webp"
                alt=""
                className="absolute top-2 end-9 sm:top-2 sm:end-20 w-28 opacity-50 blur-sm "
              />
            </motion.div>
          </div>
        </div>
        <div className="  flex space-x-3 lg:space-x-5 justify-center">
          {ContactList.map((list) => (
            <motion.div
              key={list.id}
              animate={{
                scale: bodySectionIsInView ? [0, 1] : 0,
                opacity: bodySectionIsInView ? 1 : 0
              }}
              transition={{ type: "spring", stiffness: 60, delay: list.delay }}
              initial={{ opacity: 0.1 }}
              className=" basis-14 lg:basis-16">
              <button
                aria-label={`Button Contact to ${list.name}`}
                onClick={() =>
                  window.open(
                    list.url,
                    "_blank"
                  )
                }
                className=" shadow-cus bg-light/60 rounded-xl sm:rounded-2xl flex items-center justify-center  hover:scale-105 transition-transform ease-in-out hover:cursor-pointer"
              >
                <img
                  src={list.img}
                  alt=""
                  className="relative object-cover p-2.5"
                />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
