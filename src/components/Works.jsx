import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    // <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    // <h1>MBSA</h1>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-lg sm:text-xl'>{name}</h3>
          <p className='mt-2 text-secondary text-sm sm:text-base'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-sm sm:text-base ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    // </motion.div>
  );
};




const Works = () => {
  return (
    <>
    <div variants={textVariant()}>
      <p className={`${styles.sectionSubText} `}>My work</p>
      <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
    </div>
      {/* <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div> */}

      <div className='w-full flex'>
      <p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      

        Following are some of my projects which showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. Kindly find my detailed resume <a href="https://drive.google.com/file/d/1z0VYoDJxzaMwvYqZmj0MGQDTYO4CYw7v/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: 'red' }} className="font-bold underline">here</a>, which reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively. 
      </p>
        
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");