import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cumulus from "../assets/Cumulus.png";
import QuoteGenerator from "../assets/QuoteGenerator.png";
import TodoList from "../assets/TodoList.png";
import Woody from "../assets/Woody.org.png";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <div
      className="animateHidden opacity-0 flex flex-col justify-center items-center py-20 max-w-[1240px] md:max-w-full bg-[#02021b] transition-all ease-in-out duration-[2000ms]"
      id="projects"
    >
      <h1 className="text-[#ccd6f6] font-bold text-2xl lg:text-5xl">
        Things I've Built
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 p-5 max-w-[670px] lg:max-w-[820px]">
        <div className="flex flex-col justify-center">
          <a
            className="flex items-center gap-2 w-fit text-[#e9e8e8] hover:text-[#45adff] cursor-pointer transition-all ease-in-out duration-500"
            href="https://alnickclores.github.io/Cumulus/"
            target="_blank"
          >
            <h1 className="text-lg lg:text-2xl font-bold">Cumulus</h1>
            <FontAwesomeIcon icon={faUpRightFromSquare} className="text-sm" />
          </a>

          <img className="mt-5" src={Cumulus} alt="Cumulus" />
          <p className="text-[#8892b0] text-sm md:text-base lg:text-xl">
            A web app for monitoring the weather. Using weather API from
            <a
              className="text-[#45adff] hover:underline underline-offset-4 transition ease-in-out duration-1000"
              href="https://openweathermap.org/"
              target="_blank"
            >
              OpenWeather.
            </a>
          </p>
          <div className="flex items-center gap-3 mt-5 text-center min-w-0">
            <span className="text-[#45adff] text-xs font-semibold rounded-xl bg-[#45beff3a] px-3 py-1">
              HTML
            </span>
            <span className="text-[#45adff] text-xs font-semibold rounded-xl bg-[#45beff3a] px-3 py-1">
              CSS
            </span>
            <span className="text-[#45adff] text-xs font-semibold rounded-xl bg-[#45beff3a] px-3 py-1">
              React
            </span>
            <span className="text-[#45adff] text-xs font-semibold rounded-xl bg-[#45beff3a] px-3 py-1">
              OpenWeather API
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <a
            className="flex items-center gap-2 w-fit text-[#e9e8e8] hover:text-[#45adff] cursor-pointer transition-all ease-in-out duration-500"
            href="https://alnickclores.github.io/todolist-app/"
            target="_blank"
          >
            <h1 className="text-lg lg:text-2xl font-bold">To-Do List</h1>
            <FontAwesomeIcon icon={faUpRightFromSquare} className="text-sm" />
          </a>
          <img className="mt-5" src={TodoList} alt="Todo-List" />
          <p className="text-[#8892b0] text-sm md:text-base lg:text-xl">
            A web app that helps to boost your productivity by keeping track or
            managing the tasks you have.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <span className="text-[#45adff] text-xs font-semibold rounded-xl bg-[#45beff3a] px-3 py-1">
              HTML
            </span>
            <span className="text-[#45adff] text-xs font-semibold rounded-xl bg-[#45beff3a] px-3 py-1">
              CSS
            </span>
            <span className="text-[#45adff] text-xs font-semibold rounded-xl bg-[#45beff3a] px-3 py-1">
              React
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <a
            className="flex items-center gap-2 w-fit text-[#e9e8e8] hover:text-[#45adff] cursor-pointer transition-all ease-in-out duration-500"
            href="https://alnickclores.github.io/Woody-org_final/WebDev_Defense_/Homepage.html"
            target="_blank"
          >
            <h1 className="text-lg lg:text-2xl font-bold">Woody.org</h1>
            <FontAwesomeIcon icon={faUpRightFromSquare} className="text-sm" />
          </a>
          <img className="mt-5" src={Woody} alt="Woody.org" />
          <p className="text-[#8892b0] text-sm md:text-base lg:text-xl">
            The objective of this website is to educate people about self
            defense and lesses the crime rate in the community.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <span className="text-[#45adff] text-xs font-semibold rounded-xl bg-[#45beff3a] px-3 py-1">
              HTML
            </span>
            <span className="text-[#45adff] text-xs font-semibold rounded-xl bg-[#45beff3a] px-3 py-1">
              CSS
            </span>
            <span className="text-[#45adff] text-xs font-semibold rounded-xl bg-[#45beff3a] px-3 py-1">
              PHP
            </span>
            <span className="text-[#45adff] text-xs font-semibold rounded-xl bg-[#45beff3a] px-3 py-1">
              Oracle
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <a
            className="flex items-center gap-2 w-fit text-[#e9e8e8] hover:text-[#45adff] cursor-pointer transition-all ease-in-out duration-500"
            href="https://alnickclores.github.io/QuoteGenerator/year_end_proj/quote.html"
            target="_blank"
          >
            <h1 className="text-lg lg:text-2xl font-bold">Quote Generator</h1>
            <FontAwesomeIcon icon={faUpRightFromSquare} className="text-sm" />
          </a>
          <img className="mt-5" src={QuoteGenerator} alt="Quote Generator" />
          <p className="text-[#8892b0] text-sm md:text-base lg:text-xl">
            A website that will give you a random motivational quote. The main
            goal of this website is to motivate people who are struggling with
            their lives.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <span className="text-[#45adff] text-xs font-semibold rounded-xl bg-[#45beff3a] px-3 py-1">
              HTML
            </span>
            <span className="text-[#45adff] text-xs font-semibold rounded-xl bg-[#45beff3a] px-3 py-1">
              CSS
            </span>
            <span className="text-[#45adff] text-xs font-semibold rounded-xl bg-[#45beff3a] px-3 py-1">
              Javascript
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
