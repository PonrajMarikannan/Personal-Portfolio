import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <p className={`${styles.sectionSubText} text-center`}>Technologies</p>
      <h2 className={`${styles.sectionHeadText}  text-center`}>My&nbsp;Techstack</h2>
      <motion.div
        variants={fadeIn("right", "spring", 0.65, 1.3)}
        className='flex flex-wrap flex-row justify-center gap-10 mt-16'
      >
        {technologies.map((tech, index) => (
          <div className='w-28 h-28' key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "About");