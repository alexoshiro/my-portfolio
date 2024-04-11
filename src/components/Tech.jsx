import React from "react";

import { Tilt } from "react-tilt";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const TechCard = ({ name, icon }) => (
  <Tilt className='xs:w-[200px] w-full'>
    <div
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
    </div>
  </Tilt>
);


const Tech = () => {
  return (
    <div className='flex flex-wrap gap-10'>
      {technologies.map((technology) => (
        <TechCard key={technology.name} {...technology} />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");