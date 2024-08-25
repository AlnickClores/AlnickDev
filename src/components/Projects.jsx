import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen py-20 max-w-[1240px] md:max-w-full bg-[#02021b] transition-all ease-in-out duration-[2000ms]"
      id="projects"
    >
      <h1 className="hide animate-slideInLeft text-[#ccd6f6] font-bold text-2xl lg:text-5xl">
        Things I've Built
      </h1>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 p-5 max-w-[670px] lg:max-w-[820px]">
        {projects.map((project) => {
          return (
            <div className="flex flex-col" key={project.name}>
              <a
                className="hide proj flex items-center gap-2 w-fit text-[#e9e8e8] hover:text-[#45adff] cursor-pointer transition-all ease-in-out duration-500"
                href={project.link}
                target="_blank"
              >
                <h1 className="text-lg lg:text-2xl font-bold">
                  {project.name}
                </h1>
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                  className="text-sm"
                />
              </a>

              <img
                className="hide proj mt-5"
                src={project.image}
                alt={project.name}
              />
              <p className="hide proj text-[#8892b0] text-sm md:text-base lg:text-xl">
                {project.description}
              </p>
              <div className="flex items-center gap-3 mt-5 text-center min-w-0">
                {project.techStack.map((stack, index) => {
                  return (
                    <span
                      className="hide proj text-[#45adff] text-xs font-semibold rounded-xl bg-[#45beff3a] px-3 py-1"
                      key={index}
                    >
                      {stack}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
