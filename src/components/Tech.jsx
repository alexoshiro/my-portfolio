import React from "react";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { fadeIn } from "../utils/motion";

const TechCard = ({ index, name, icon }) => (
  <Tilt className='xs:w-[200px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.1, 0.25)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {name}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const Tech = () => {
  return (
    <div className='flex flex-wrap gap-10'>
      {technologies.map((technology, index) => (
        <TechCard key={technology.name} index={index} {...technology} />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");