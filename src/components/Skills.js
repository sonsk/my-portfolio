import React from "react";
import { languages,frameworks,tools } from "./Details";
function Skills() {
  // Tableaux de données pour chaque catégorie de compétences
  

  return (
    <div id="skills" className="min-h-screen flex flex-col items-center justify-center text-blue-950 dark:bg-blue-950 dark:text-white">
      <div className="w-10/12 flex flex-col mt-32 md:justify-between mx-auto">
        <h1 className="text-5xl font-bold justify-left ">Skills</h1>
        <div className="w-full text-center md:w-8/12 flex flex-col md:flex-row md:justify-between mx-auto ">
            {/* Langages */}
            <div className="mt-5 w-full  md:w-1/3">
            <p className="text-2xl">Langages</p>
            <ul className="mt-5 flex flex-col space-y-4 text-green-400 font-bold">
                {languages.map((language, index) => (
                <li key={index}>
                    <span className="rounded-2xl p-2  bg-blue-950 dark:bg-green-100 ">
                    {language}
                    </span>
                </li>
                ))}
            </ul>
            </div>

            {/* Frameworks */}
            <div className="mt-5 md:w-1/3">
            <p className="text-2xl">Frameworks</p>
            <ul className="mt-5 flex flex-col space-y-4 text-green-400 font-bold">
                {frameworks.map((framework, index) => (
                <li key={index}>
                    <span className="rounded-2xl p-2 bg-blue-950 dark:bg-green-100">
                    {framework}
                    </span>
                </li>
                ))}
            </ul>
            </div>

            {/* Outils */}
            <div className="mt-5 md:w-1/3">
            <p className="text-2xl">Outils</p>
            <ul className="mt-5 flex flex-col space-y-4 text-green-400 font-bold">
                {tools.map((tool, index) => (
                <li key={index}>
                    <span className="rounded-2xl p-2 bg-blue-950 dark:bg-green-100">
                    {tool}
                    </span>
                </li>
                ))}
            </ul>
            </div>
        </div>
      </div>
      {/* Reste du contenu responsive */}
        <div className="mt-24  hidden md:block">
            <h1 className="t-4 text-3xl md:text-2xl font-bold text-center text-blue-950 dark:text-white">Fatal Combo</h1>
            <div className="flex items-center justify-center mx-auto text-5xl dark:text-white">
                <img className="rounded-full " src="techs/php.png"/>{'+'}
                <img className="rounded-full " src="techs/mysql.png"/>{'+'}
                <img className="rounded-full " src="techs/react.png"/>{'+'}
                <img className="rounded-full " src="techs/tailwind.png"/>{'+'}
                <img className="rounded-full " src="techs/git.png"/>{'+'}
                <img className="rounded-full " src="techs/vscode.png"/>
            </div>
        </div>
      {/* ... */}
    </div>
  );
}

export default Skills;
