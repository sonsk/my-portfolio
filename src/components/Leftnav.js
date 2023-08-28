import React from 'react'
import {Link} from "react-router-dom"
import {BsGithub} from "react-icons/bs"
import { SiGmail } from "react-icons/si"
import { FiLinkedin } from "react-icons/fi"

export default function Leftnav() {
  return (
    <div className="sticky bottom-0 hidden md:block w-1/12 ">
        <div className='w-11/12 mx-auto flex flex-col items-center'>
            <div className='w-0 text-blue-950 dark:text-slate-200 '>
                <p className='-m-2  w-0  text-2xl hover:text-green-400 ' ><a href="https://github.com/sonsk" target="_blank" rel="noopener noreferrer"><BsGithub/></a></p>
                <p className='-m-2 w-0 pt-4 text-2xl hover:text-red-600 '><a href="mailto:sonfacksteve15@gmail.com"><SiGmail/></a></p>
                <p className='-m-2 w-0 pt-4 text-2xl hover:text-blue-400 '><a href="https://www.linkedin.com/in/steve-sonfack-kemdong" target="_blank" rel="noopener noreferrer"><FiLinkedin/></a></p>    
            </div> 
            <div className='h-32 mt-4 border-transparent border-2  border-l-blue-950 dark:border-l-slate-300' ></div>        
        </div>
    </div>
  )
}
