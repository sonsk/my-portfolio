import React from 'react'

export default function brouillon() {
  return (
    <div className="flex gap-4 w-5/5">
    <div className="w-1/5 "> {/* Utilisation d'une largeur fixe pour le bloc de liens */}
        <Router>
            <div className="flex flex-col">
                <NavLink
                    to="/"
                    onClick={() => handleDiv("php")}
                    className="mb-2 py-1 px-2 rounded-md transition-colors duration-300 hover:bg-blue-950 hover:text-white"
                    activeClassName="bg-blue-950 text-white"
                >
                    php
                </NavLink>
                <NavLink
                    to="/"
                    onClick={() => handleDiv("html")}
                    className="mb-2 py-1 px-2 rounded-md transition-colors duration-300 hover:bg-blue-950 hover:text-white"
                    activeClassName="bg-blue-950 text-white"
                >
                    html
                </NavLink>
            </div>
        </Router>
    </div>
    <div className="flex-1"> {/* Utilisation d'une largeur fixe pour le contenu */}
        {show === "php" && (<DesciptionPhp/>)}
        {show === "html" && (<DescriptionHtml/>)}
    </div>

    {/* Tabs */}
    <Tabs defaultActiveKey="php" 
              className="h-32 w-full mx-auto border-2 border-yellow-200  block md:hidden overflow-auto rounded-lg shadow"
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
  )
}
