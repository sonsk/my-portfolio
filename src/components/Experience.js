import React from 'react';
import { Tabs } from "antd";
import { projects,experience } from './Details';


export default function Experience() {
  return (
    <div
    id="experience"
    className="min-h-screen border-2 border-blue-400 flex flex-col items-center text-blue-950 dark:bg-blue-950 dark:text-white"
  >
    <div className='md:w-8/12  border-2 border-green-400 mt-32'>
      <h1 className="h-24 w-8/12  text-3xl font-bold text-left">Experiences</h1>
      
        <div className='hidden md:block'>
          <Tabs defaultActiveKey="php" 
              className="min-h-full w-10/12 mx-auto border-2 border-yellow-200 "
             centered= "true"
              tabPosition="left" >
              {Object.keys(experience).map((key)=>
                <Tabs.TabPane 
                    tab={
                            <span className="hover:text-green-500 text-blue-950 dark:text-gray-400 text-l">{experience[key].company}</span>
                        } 
                    key={key}>
                    <div className="text-justify p-4">
                        
                        <p className='dark:text-white text-blue-950 text-xl first-letter:uppercase'>{experience[key].poste}{' '}
                            <span className='text-green-600 dark:text-green-400 font-bold'>{'@'}{experience[key].company}</span>
                        </p>
                        <p className='p-2 text-gray-400'>
                            {experience[key].date}
                        </p>
                        <div className="m-4 ">
                            <ul>
                            {experience[key].description.map((description,index)=>
                                
                                <li key={index} className="p-1  text-blue-950 dark:text-gray-300 font-semibold">
                                    
                                 <span className='font-bold text-2xl '>→</span>   {description}
                                </li>
                            )}
                            </ul>
                            <p className="m-4">
                                {experience[key].outils.map((outil) =>
                                    <span key={outil} className="rounded-2xl p-2 mr-1 bg-green-100 text-green-600 font-bold"> 
                                    {outil}
                                </span>
                            
                                )}
                            </p>
                            
                            
                
                        </div>
                    </div>
                </Tabs.TabPane>
              )}
          </Tabs>
          </div>
          {/* Mobile */}

          <div className='block md:hidden'>
          <Tabs defaultActiveKey="php" 
              className=" min-h-full w-full mx-auto border-2 border-yellow-200  "
             centered= "true"
              tabPosition="top" >
              {Object.keys(experience).map((key)=>
                <Tabs.TabPane 
                    tab={
                            <span className="overflow:auto rounded-lg shadow hover:text-green-500 text-blue-950 dark:text-gray-400 text-l">{experience[key].company}</span>
                        } 
                    key={key}>
                    <div className="text-justify p-4">
                        
                        <p className='dark:text-white text-blue-950 text-xl first-letter:uppercase'>{experience[key].poste}{' '}
                            <span className='text-green-600 dark:text-green-400 font-bold'>{'@'}{experience[key].company}</span>
                        </p>
                        <p className='p-2 text-gray-400'>
                            {experience[key].date}
                        </p>
                        <div className="m-4 ">
                            <ul>
                            {experience[key].description.map((description, index)=>
                                
                                <li key={index} className="p-2  text-blue-950 dark:text-gray-300 font-semibold">
                                    
                                 <span className='font-bold text-2xl'>→</span>   {description}
                                </li>
                            )}
                            </ul>
                        </div>
                    </div>
                </Tabs.TabPane>
              )}
          </Tabs>
          </div>
     
     
      </div>
  </div>
  )
}
