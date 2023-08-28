import React from 'react'

const About = () => {
  return (
    <div id="about" className=" min-h-screen  flex flex-col items-center justify-center text-blue-950 dark:bg-blue-950 dark:text-white">
        <div className='mt-32 sm:text-center  w-10/12'>
        <h1 className="text-5xl font-bold text-left "> About</h1>
        <div className="  pt-4 w-11/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-center md:justify-between  dark:bg-blue-950">
                
                <div className="w-full mx-auto ">
                    <img className="rounded-full " src="img4.png"/>
                </div>
                <div className="text-justify  md:text-left dark:text-white ">
                    <p className="md:w-full p-4 text-l">
                    Salut! Je suis Steve, <span className='text-green-400'>un ingénieur de conception en informatique </span>
                    diplômé de l'École Nationale Supérieure Polytechnique de Douala et <span className='text-green-400'>développeur d'application web</span> basé à Douala, Cameroun. 
                     
                    Ma passion pour le développement m'a embarqué dans un voyage captivant de la transformation de lignes de code en expériences numériques uniques.
                    <br></br>
                    <br></br>
                    Mon langage maternel, c'est le <span className='text-green-400'>PHP</span> .
                     Cependant 
                     Je jongle avec diverses technologies pour façonner des applications web qui allient éfficacité et convivialité.
                     <br></br>
                     <br></br>
                    Mon parcours est une mosaïque d'expériences riches et variées. 
                    En tant que développeur freelance, j'ai conçu et déceloppé des solutions sur mesure pour une multitude de clients.
                     Mes plongées dans l'univers des applications web, que ce soit à travers des projets scolaires ou personnels, 
                     ont enrichi ma boîte à outils et affiné mon approche de conception.
                     <br></br>
                     <br></br>
                    N'hésitez pas à entamer la conversation,
                    Steve
                    </p>
                </div>
                
            </div>
          </div>
            <hr></hr>
    </div>
  )
}
export default About;