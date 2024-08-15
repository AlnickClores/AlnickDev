import React from "react";
import { techstack } from "../data/techstack";

const TechStack = () => {
  return (
    <div className="flex flex-col gap-3 px-8">
      <h1 className="text-[#ccd6f6] text-2xl md:text-2xl lg:text-3xl font-semibold">
        Technologies I have been actively engaged with lately:
      </h1>
      <ul className="grid grid-cols-2 gap-x-7 gap-y-2 my-3 ml-3 list-disc">
        {techstack.map((stack, index) => (
          <li
            key={index}
            className="text-[#45adff] font-mono text-sm md:text-base lg:text-lg"
          >
            {stack}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechStack;
