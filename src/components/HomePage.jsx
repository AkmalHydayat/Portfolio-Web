/* eslint-disable react/no-unescaped-entities */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const HomePage = () => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef)
  return (
    <div ref={scrollRef} loading="lazy">
      <div
        id="homepage"
        className="h-fit  flex items-center flex-col  md:flex-row md:justify-between mt-28 md:my-[120px] lg:my-[136px]"
      >
        <div className=" md:order-2 md:w-1/2 lg:w-1/3 flex md:justify-center lg:justify-center">
          <motion.div
            animate={{
              scale: isInView ? [0, 1] : 0, opacity: isInView ? 1 : 0
            }}
            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            initial={{ opacity: 0 }}

          >
            <img
              src="/Photo.webp"
              loading="lazy"
              alt=""
              className="w-[250px] sm:w-[250px] md:w-[250px] lg:w-[300px] md:relative md:-end-8 lg:-end-0 "
            />
          </motion.div>
        </div>

        <div className="text-center md:text-start space-y-6 lg:space-y-10 md:order-1 md:w-2/3 lg:w-2/3 relative z-10 ">
          <div className="flex justify-center md:justify-start ">
            <motion.div
              animate={{
                scale: isInView ? [0, 1] : 0,
                opacity: isInView ? 1 : 0
              }}
              transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
              initial={{ opacity: 0 }}

            >
              <h2 className="tracking-tighter font-Atma text-5xl md:text-6xl lg:text-[65px] ">
                Hello There{" "}
                <span className="animate-wiggleUpdate text-5xl md:text-6xl lg:text-[65px] -mt-2">
                  👋
                </span>
              </h2>
            </motion.div>
          </div>
          <div className="font-Acme text-4xl/none md:text-5xl/none lg:text-[65px] relative tracking-tight">
            <motion.div
              animate={{ x: isInView ? [-200, 0] : 0, opacity: isInView ? 1 : 0 }}
              transition={{ type: "spring", stiffness: 70, delay: 0.4 }}
              initial={{ opacity: 0 }}

            >
              <h2>
                I'm <span className="text-yellow">Akmal</span>,
              </h2>
              <h2>Frontend Developer</h2>
            </motion.div>
            <motion.div
              animate={{ x: isInView ? [200, 0] : 0, opacity: isInView ? 1 : 0 }}
              transition={{ type: "spring", stiffness: 70, delay: 0.4 }}
              initial={{ opacity: 0 }}

            >
              <div className="font-TitiliumWeb px-10 mt-2 md:mt-1 font-light lg:font-extralight text-[17px]/none md:text-[17px]/none lg:text-[24px] sm:px-28 md:px-0 md:w-96 lg:w-[500px] ">
                Building Bridges Between Design and Development. Designing
                Tomorrow's Web Today.
              </div>
            </motion.div>

            <motion.div
              animate={{ scale: isInView ? [0.5, 1] : 0, opacity: isInView ? 1 : 0 }}
              transition={{ type: "tween", stiffness: 10, delay: 0.4 }}
              initial={{ opacity: 0 }}

            >
              <div className="relative flex justify-center -top-36 md:justify-start md:start-14 md:-top-44 lg:-top-56 lg:start-28 -z-10">
                <img
                  src="/Ellipse 11.webp"
                  alt=""
                  className="absolute w-48 md:w-56 lg:w-64"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
