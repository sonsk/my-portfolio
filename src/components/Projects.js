import React, {useState} from "react";
import { BrowserRouter as Router,NavLink } from "react-router-dom";
import { Tabs } from "antd";

function Projects(){
    const [show, setShow] = useState('php')
    const handleDiv = (e) =>{
        setShow(e)
    }
    
    return(
        <div id="projects" className="min-h-screen flex flex-col items-center justify-center text-blue-950 dark:bg-blue-950 dark:text-white">
           
            <h1 className="text-5xl font-bold justify-left">Projects</h1>

            <div className="w-5/12 flex flex-cols justify-between  mx-auto mt-4">
                
                <div className=" text-center">
                    <Router>
                        <div className="flex flex-col">
                            <NavLink to="/"  onClick={()=>handleDiv("php")} >php</NavLink>
                            <NavLink to="/"  onClick={()=>handleDiv("html")} >html</NavLink>
                            
                        </div>
                    </Router>
                </div>
                <div className="text-center">    
                    {show === "php" && (<DesciptionPhp/>)}
                    {show === "html" && (<DescriptionHtml/>)}   
                </div>
            </div>
         

        </div>
    );

}
const DesciptionPhp = ()=>{
    return(
        "voici le texte du php 2.0"
    )
}
const DescriptionHtml = ()=>{
    return(
        <div>
            voici la description de html
            voici le html
            <p>
                <span className="rounded-2xl p-2 bg-green-200 text-green-600 font-bold"> React</span>  
            </p>  
        </div>
    )
}
export default Projects;
