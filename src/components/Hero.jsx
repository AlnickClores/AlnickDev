import React from "react";

const Hero = () => {
  const myResume = () => {
    window.open(
      `${window.location.origin}/myResume.pdf`,
      "_blank",
      "noreferrer noopener"
    );
  };

  return (
    <div>
      <div
        className="animateHidden opacity-0 flex flex-col justify-center items-center max-w-[1240px] md:max-w-full h-screen text-[#ccd6f6] bg-[#02021b] transition-all ease-in-out duration-[2000ms]"
        id="hero"
      >
        <div className="flex flex-col justify-center gap-3 md:gap-5 p-5">
          <p className="md:text-2xl lg:text-3xl text-[#45adff]">Hello, I am</p>
          <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold">
            Alnick Clores.
          </h1>
          <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-[#8892b0]">
            Front-end Developer.
          </h1>
          <p className="md:text-xl lg:text-2xl">
            I'm currently Senior
            <span className="text-[#45adff]"> IT student</span> based on
            Valenzuela, Philippines.
          </p>
        </div>
        <button
          className="border border-[#45adff] rounded py-3 px-10 md:py-5 md:px-12 lg:px-20 bg-transparent hover:bg-[#45adff]/20 transition-all ease-in-out duration-500"
          onClick={myResume}
        >
          <a className="text-[#45adff] font-semibold">Resume</a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
