import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div
      className="flex flex-col justify-center items-center max-w-[1240px] md:max-w-full bg-[#02021b] min-h-screen transition-all ease-in-out duration-[2000ms]"
      id="contacts"
    >
      <div className="flex flex-col gap-4 p-12 max-w-[670px] lg:max-w-[820px] text-center">
        <h1 className="hide contact text-[#ccd6f6] font-bold text-2xl lg:text-5xl">
          Get In Touch
        </h1>
        <p className="hide contact text-[#8892b0] text-sm md:text-base lg:text-xl">
          I am seeking for new opportunities at the moment, I'm readily
          available in my inbox. Whether you have inquiries or simply wish to
          connect, I'll do my utmost to respond promptly!
        </p>
      </div>

      <ul className="flex gap-10">
        <li className="hide links">
          <a href="https://github.com/AlnickClores" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-2xl text-[#ccd6f6] hover:text-[#8892b0] hover:transition ease-in-out duration-500"
            />
          </a>
        </li>
        <li className="hide links">
          <a
            href="https://www.linkedin.com/in/alnick-clores-469307243/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-2xl text-[#ccd6f6] hover:text-[#8892b0] hover:transition ease-in-out duration-500"
            />
          </a>
        </li>
        <li className="hide links">
          <a href="https://twitter.com/sprtrmp06" target="_blank">
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-2xl text-[#ccd6f6] hover:text-[#8892b0] hover:transition ease-in-out duration-500"
            />
          </a>
        </li>
        <li className="hide links">
          <a href="https://www.instagram.com/alnick.clores/" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-2xl text-[#ccd6f6] hover:text-[#8892b0] hover:transition ease-in-out duration-500"
            />
          </a>
        </li>
      </ul>
      <span className="m-10">
        <p className="text-[#45aeff] hover:text-[#45aeffa8] text-sm font-semibold hover:underline underline-offset-4 transition ease-in-out duration-500 cursor-pointer">
          Built by Alnick Clores
        </p>
      </span>
    </div>
  );
};

export default Footer;
