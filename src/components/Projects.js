import React, { useState } from "react";
import { Tabs, Card, Button } from "antd";
import { projects } from "./Details";

const { Meta } = Card;

function Projects() {
    const cardStyle = {
        display: "flex",       // Utilisation de flexbox
        flexDirection: "row"  // Alignement côte à côte
      };
  return (
   <div id="projects"
   className=" border-2 border-yellow-400 min-h-screen flex flex-col items-center  text-blue-950 dark:bg-blue-950 dark:text-white"
   >
    <div className="w-10/12 mt-32 border-2 border-blue-700">
    <h1 className="h-24 w-8/12  text-3xl font-bold text-left">Projets</h1>
    <div className="w-full">
    {Object.keys(projects).map((key) =>

        <div key={key} className="m-4 max-w-md mx-auto  rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="md:flex-shrink-0 transform scale-110 -rotate-6">
                    <img className="h-48 w-full rounded-full object-cover md:w-48" src={projects[key].image} alt="Image alt text" loading="lazy" />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Card title</div>
                    <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Card description</a>
                    <p className="mt-2 text-gray-500 text-justify">
                        {projects[key].description}
                    </p>
                    
                    <p className="m-4">
                        {projects[key].langages.map((langage) =>
                            <span key={langage} className="rounded-2xl p-2 mr-1 bg-green-100 text-green-600 font-bold"> 
                            {langage}
                        </span>
                    
                         )}
                    </p>
                
                </div>
                
            </div>
        </div>
    )}
        
    </div>
    {/*     <Card
      cover={<img alt="example" src="img1.png" />}
      actions={[
        <Button type="primary" key="1">
          Action 1
        </Button>,
        <Button key="2">Action 2</Button>,
      ]}
    >
      <Meta title="Card title" description="This is the description." />
    </Card>
    
    <Card style={cardStyle} className="max-w-md mx-auto md:max-w-2xl">
      <img alt="example" src="img1.png" className="h-48 w-full object-cover md:w-48" />
      <Meta
        title="Card title"
        description={
          <>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
              Card description
            </a>
            <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis dapibus mauris. Duis auctor pellentesque bibendum. Fusce nec eros quis ex fringilla semper.</p>
          </>
        }
      />
    </Card> */}
    
    </div>
   </div>
 
  );
}

export default Projects;
