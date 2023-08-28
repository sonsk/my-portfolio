import React from "react";
import { useState,useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
function Header(){
    const [theme, setTheme] = useState(null);
    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [theme]);
  
    const handleThemeSwitch = () => {
      setTheme(theme === "dark" ? "light" : "dark");
    };
    return(
        <div className="sticky top-0 z-30 mx-auto p-4 flex items-center w-11/12 justify-between
          text-blue-950 dark:text-white dark:bg-blue-950">
            <div className="text-3xl font-bold">
                Sks
            </div>
            
            <div className="flex space-x-4 font-bold">
                <ScrollLink to="about" smooth="true">
                    <a href="">About</a>
                </ScrollLink>
                <ScrollLink to="skills" smooth="true">
                    <a href="">Skills</a>
                </ScrollLink>
                <ScrollLink to="experience" smooth="true">
                    <a href="">Experience</a>
                </ScrollLink>
                <ScrollLink to="projects" smooth="true">
                    <a href="">Projects</a>
                </ScrollLink>  
                <ScrollLink to="contact" smooth="true">
                    <a href="">Contact</a>
                </ScrollLink>
                <button onClick={handleThemeSwitch} className="bg-blue-950 dark:bg-white text-white dark:text-blue-950 rounded-2xl p-2">
                  {theme === "dark" ? "sun" : "moon"}
                </button>
            </div>
        </div>
            
    )
}
export default Header;