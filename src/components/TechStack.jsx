import React from "react";

const TechStack = () => {
  return (
    <div className="flex flex-col gap-3 px-8">
      <h1 className="text-[#ccd6f6] text-2xl md:text-2xl lg:text-3xl font-semibold">
        Technologies I have been actively engaged with lately:
      </h1>
      <ul className="my-3 list-disc ml-3">
        <li className="text-[#8892b0] md:text-base lg:text-lg my-2">HTML</li>
        <li className="text-[#8892b0] md:text-base lg:text-lg my-2">
          JavaScript (ES6+)
        </li>
        <li className="text-[#8892b0] md:text-base lg:text-lg my-2">React</li>
        <li className="text-[#8892b0] md:text-base lg:text-lg my-2">
          Tailwind CSS
        </li>
      </ul>
    </div>
  );
};

export default TechStack;
