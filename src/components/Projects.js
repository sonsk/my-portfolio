import React, { useState } from "react";
import { Tabs, Card, Button } from "antd";
import { projects } from "./Details";



function Projects() {
   
  return (
   <div id="projects"
   className="  min-h-screen flex flex-col items-center  text-blue-950 dark:bg-blue-950 dark:text-white"
   >
    <div className="w-10/12 mt-32 ">
    <h1 className="h-24 w-8/12  text-3xl font-bold text-left">Projets</h1>
    <div className="overflow-x-auto">
    {Object.keys(projects).map((key) =>

        <div key={key} className="m-4 max-w-md mx-auto  rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="md:flex-shrink-0 transform scale-110 -rotate-6">
                    <img className="h-48 w-full rounded-full object-cover md:w-48" src={projects[key].image} alt="" loading="lazy" />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-xl">{projects[key].company}</div>
                    <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{projects[key].title}</a>
                    <p className="mt-2 text-gray-500 text-justify text-xl">
                        {projects[key].description}
                    </p>
                    <div className="overflow-auto rounded-lg">
                    <p className="m-4 ">
                        {projects[key].langages.map((langage) =>
                            <span key={langage} className="rounded-2xl p-2 mr-1 bg-green-100 text-green-600 font-bold"> 
                            {langage}
                        </span>
                    
                         )}
                    </p>
                </div>
                </div>
                
            </div>
        </div>
    )}
        
    </div>
   
    </div>
   </div>
 
  );
}

export default Projects;
