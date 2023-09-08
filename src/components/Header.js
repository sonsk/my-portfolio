import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Theme from "./Theme";
import { AiOutlineMenu } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi"
import { RxCross1 } from "react-icons/rx";
import { ImCross } from "react-icons/im";

function Header() {
  

  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className={`sticky top-0 backdrop-blur-sm z-30 ${menu ? 'h-screen fixed w-screen' : ''}`}>
      <div className="w-11/12 mx-auto p-4 flex items-center justify-between text-blue-950 dark:text-white dark:bg-blue-950">
        <div className="text-3xl font-bold">Sks</div>
        {<Theme/>}
        <div className="md:flex md:space-x-4 font-bold">
          <div className="flex space-x-4 hidden md:block">
            <ScrollLink to="about" smooth="true">
              <button>About</button>
            </ScrollLink>
            <ScrollLink to="skills" smooth="true">
             <button>Skills</button>
            </ScrollLink>
            <ScrollLink to="experience" smooth="true">
             <button>Experience</button>
            </ScrollLink>
            <ScrollLink to="projects" smooth="true">
              <button>Projects</button>
            </ScrollLink>
            <ScrollLink to="contact" smooth="true">
              <button>Contact</button>
            </ScrollLink>
          </div>
          <div onClick={handleMenu}>
            {menu === false ? <BiMenuAltRight className="text-3xl md:hidden" /> : <ImCross className="text-3xl md:hidden" />}
          </div>
        </div>
      </div>
      {menu ? (
        <div className="my-auto dark:bg-blue-950 bg-white dark:text-white text-blue-950 md:hidden">
          <div className="min-h-full flex flex-col items-center justify-center text-center text-3xl">
            <ScrollLink to="about" smooth="true" className="pb-12" >
              <button>About</button>
            </ScrollLink>
            <ScrollLink to="skills" smooth="true" className="pb-12">
              <button>Skills</button>
            </ScrollLink>
            <ScrollLink to="experience" smooth="true" className="pb-12">
             <button>Experience</button>
            </ScrollLink>
            <ScrollLink to="projects" smooth="true" className="pb-12">
              <button>Projects</button>
            </ScrollLink>
            <ScrollLink to="contact" smooth="true" className="pb-12" >
             <button>Contact</button>
            </ScrollLink>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
