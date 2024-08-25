import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMobileMenuToggle from "../hooks/navbarToggle";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  useMobileMenuToggle();
  return (
    <div>
      <div className="animate-slideInTop flex items-center justify-center">
        <nav className="flex justify-between items-center w-full max-w-[800px] h-20 px-8 text-[#45adff] bg-[#02021b] fixed top-0 z-50">
          <div>
            <a
              className="text-2xl cursor-pointer uppercase font-bold tracking-widest"
              href="index.html"
            >
              AC
            </a>
          </div>

          <div className="md:hidden block cursor-pointer" id="toggleButton">
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
            <FontAwesomeIcon icon={faX} className="hidden text-2xl" />
          </div>

          <ul className="hidden md:flex md:uppercase">
            <li className="text-l m-4 hover:text-blue-200 hover:transition ease-in-out duration-500">
              <a href="#hero">Home</a>
            </li>
            <li className="text-l m-4 hover:text-blue-200 hover:transition ease-in-out duration-500">
              <a href="#about">About</a>
            </li>
            <li className="text-l m-4 hover:text-blue-200 hover:transition ease-in-out duration-500">
              <a href="#projects">Projects</a>
            </li>
            <li className="text-l m-4 hover:text-blue-200 hover:transition ease-in-out duration-500">
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
        </nav>
      </div>

      <ul
        className="navbar flex flex-col items-center justify-center fixed w-full h-screen hidden uppercase bg-[#02021b] bg-opacity-90 z-30 transition-all ease-in-out duration-500 md:hidden"
        id="mobileMenu"
      >
        <li className="text-2xl font-semibold my-5 text-blue-200 hover:text-blue-200">
          <a className="nav-link" href="#hero">
            Home
          </a>
        </li>
        <li className="text-2xl font-semibold my-5 text-blue-200 hover:text-blue-200">
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
        <li className="text-2xl font-semibold my-5 text-blue-200 hover:text-blue-200">
          <a className="nav-link" href="#projects">
            Projects
          </a>
        </li>
        <li className="text-2xl font-semibold my-5 text-blue-200 hover:text-blue-200">
          <a className="nav-link" href="#contacts">
            Contacts
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
