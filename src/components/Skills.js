import React, { useState } from "react";
function Skills(){
    
    return(
        <div id="skills" className=" min-h-screen flex flex-col items-center justify-center text-blue-950 dark:bg-blue-950 dark:text-white">
           
           <div className="w-11/12 flex md:flex-row md:justify-between">
            <h1 className="text-5xl font-bold justify-left">Skills</h1>
                <div className="">
                    <p className="text-2xl">langages</p>
                    <ul className="mt-5 flex flex-col space-y-4  text-green-400 font-bold">
                        <li >
                            <span className="rounded-2xl p-2 bg-blue-950 dark:bg-green-100">
                                PHP 8
                            </span>    
                        </li>
                        <li >
                            <span className="rounded-2xl p-2 bg-blue-950 dark:bg-green-100">
                                SQL
                            </span>    
                        </li>
                        <li >
                            <span className="rounded-2xl p-2 bg-blue-950 dark:bg-green-200">
                                HTML 5
                            </span>    
                        </li>
                        <li >
                            <span className="rounded-2xl p-2 bg-blue-950 dark:bg-green-200">
                                CSS 3
                            </span>   
                        </li>
                        <li >
                            <span className="rounded-2xl p-2 bg-blue-950 dark:bg-green-200">
                                JavaScript
                            </span>    
                        </li>
                    </ul>
                </div>
                <div className="">
                    <p className="text-2xl">Frameworks</p>
                    <ul className="mt-5 flex flex-col space-y-4  text-green-400 font-bold">
                        <li >
                            <span className="rounded-2xl p-2 bg-blue-950 dark:bg-green-100">
                               React js
                            </span>    
                        </li>
                        <li >
                            <span className="rounded-2xl p-2 bg-blue-950 dark:bg-green-100">
                                Bootstrap
                            </span>    
                        </li>
                        <li >
                            <span className="rounded-2xl p-2 bg-blue-950 dark:bg-green-200">
                                Tailwind css
                            </span>    
                        </li>
                        <li >
                            <span className="rounded-2xl p-2 bg-blue-950 dark:bg-green-200">
                                Wordpress
                            </span>   
                        </li>
                        <li >
                            <span className="rounded-2xl p-2 bg-blue-950 dark:bg-green-200">
                                ChartJs
                            </span>   
                        </li>
                        
                    </ul>
                </div>
                <div className="">
                    <p className="text-2xl">Tools</p>
                    <ul className="mt-5 flex flex-col space-y-4  text-green-400 font-bold">
                        <li >
                            <span className="rounded-2xl p-2 bg-blue-950 dark:bg-green-100">
                                Git/Github
                            </span>    
                        </li>
                        <li >
                            <span className="rounded-2xl p-2 bg-blue-950 dark:bg-green-100">
                                WampServer
                            </span>    
                        </li>
                        
                    </ul>
                </div>
           </div>
           <div className="mt-5">
                <h1 className="mt-4 text-3xl md:text-3xl font-bold text-center text-blue-950 dark:text-white">Fatal Combo</h1>
                <div className="flex items-center justify-center mx-auto text-5xl dark:text-white">
                    <img className="rounded-full " src="techs/php.png"/>{'+'}
                    <img className="rounded-full " src="techs/mysql.png"/>{'+'}
                    <img className="rounded-full " src="techs/react.png"/>{'+'}
                    <img className="rounded-full " src="techs/tailwind.png"/>{'+'}
                    <img className="rounded-full " src="techs/git.png"/>{'+'}
                    <img className="rounded-full " src="techs/vscode.png"/>
                </div>
            </div>
        </div>
    );
}
export default Skills