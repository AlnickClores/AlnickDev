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
        className="animateHidden opacity-0 flex flex-col justify-center max-w-[1240px] md:max-w-full h-screen text-[#ccd6f6] bg-[#02021b] transition-all ease-in-out duration-[2000ms]"
        id="hero"
      >
        <div className="flex flex-col items-center md:gap-5 p-5">
          <h1 className="animate-slideInLeft text-[40px] tracking-tight md:text-5xl lg:text-7xl font-bold">
            Alnick Clores
          </h1>

          <h1 className="animate-slideInLeft animation-delay-200 text-[30px] tracking-tight md:text-5xl lg:text-7xl font-bold text-[#8892b0]">
            Frontend Engineer
          </h1>

          <p className="animate-slideInLeft animation-delay-400 text-md md:text-xl lg:text-2xl">
            I build things for the web.
          </p>
        </div>
        <div className="flex justify-center">
          <button
            className="animate-slideInLeft animation-delay-600 border border-[#45adff] rounded py-2 px-12 text-sm cursor-pointer md:py-3 lg:px-20 lg:text-xl bg-transparent hover:bg-[#45adff]/20 transition-all ease-in-out duration-500"
            onClick={myResume}
          >
            <a className="text-[#45adff] font-semibold">Resume</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
