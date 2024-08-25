import React from "react";
import MyLogo from "../assets/my-logo.gif";

const Logo = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[@02021b]">
      <img src={MyLogo} alt="my logo" />
    </div>
  );
};

export default Logo;
