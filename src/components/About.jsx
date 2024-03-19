import React from "react";
import TechStack from "./TechStack";

const About = () => {
  return (
    <div
      className="animateHidden opacity-0 flex flex-col justify-center items-center pt-20 max-w-[1240px] md:max-w-full bg-[#02021b] transition-all ease-in-out duration-[2000ms]"
      id="about"
    >
      <div className="flex flex-col gap-4 p-5 max-w-[670px] lg:max-w-[820px]">
        <h1 className="text-[#ccd6f6] font-bold text-2xl lg:text-5xl">
          About Me
        </h1>
        <p className="text-[#8892b0] md:text-base lg:text-xl">
          Hello! My name is Alnick and I enjoy building things on web. My
          fascination with technology began in grade school when my parents
          introduced me to computers and the internet.
        </p>
        <p className="text-[#8892b0] md:text-base lg:text-xl">
          My primary objective at the moment revolves around deepening my
          proficiency in web development, particularly on the front-end aspect.
        </p>
        <p className="text-[#8892b0] md:text-base lg:text-xl">
          Beyond coding, I derive pleasure from watching movies, engaging in
          video games, and cherishing moments spent with my loved ones.
        </p>
      </div>
      <TechStack />
    </div>
  );
};

export default About;
