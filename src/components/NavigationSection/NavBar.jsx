import React from "react";

const NavBar = () => {
  return (
    <div className="z-50 w-full fixed h-16 lg:h-[80px] bg-white shadow-sm">
      <div className="flex h-full items-center gap-2 pl-4 ">
        <img className="w-12" src="./svg-images/logo.png" alt="" />
        <p className="  font-semibold non-italic hover:italic text-base lg:text-xl  justify-center">
          Cryptocurrency Dashboard
        </p>
      </div>
    </div>
  );
};

export default NavBar;
