import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const SectionHeadRef = useRef(null);
  const headIsInView = useInView(SectionHeadRef);

  return (
    <div ref={SectionHeadRef}>
      <motion.div

        animate={{
          scale: headIsInView ? [0, 1] : 0,
          opacity: headIsInView ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 70, delay: 0.4 }}
        initial={{ opacity: 0.1 }}
        className="font-Atma text-center text-base md:text-lg py-2">
        Made With <span className="font-semibold">Manyala Abangkuu 🔥</span>
      </motion.div>
    </div>
  );
};

export default Footer;
