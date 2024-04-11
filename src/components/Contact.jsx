import React from "react";
import { motion } from "framer-motion";

import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { fadeIn } from "../utils/motion";

import { socials } from "../constants";
import { Link } from "react-router-dom";

const ContactCard = ({ index, name, icon, link }) => (
  <Tilt className='xs:w-[200px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.1, 0.25)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <Link
        to={link}
        target="_blank" rel="noopener noreferrer"
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
      </Link>
    </motion.div>
  </Tilt>
);

const Contact = () => {



  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <div className='flex flex-wrap gap-10'>
          {socials.map((social, index) => (
            <ContactCard key={social.name} index={index} {...social} />
          ))}
        </div>

      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");