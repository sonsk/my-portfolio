import React from 'react'
import { Link as ScrollLink } from "react-scroll";
import {BsGithub} from "react-icons/bs"
import { SiGmail } from "react-icons/si"
import { FiLinkedin } from "react-icons/fi"

export default function Footer() {
  return (
    <div className="bottom-0  md:w-8/12 md:mx-auto">
         <div className=' mx-auto flex flex-col items-center  justify-center '>
            <div className='w-5/12 text-blue-950 dark:text-slate-200 flex flex-row  justify-between mb-4 md:hidden '>
                <p className='  text-2xl hover:text-green-400'><a href="https://github.com/sonsk" target="_blank" rel="noopener noreferrer"><BsGithub/></a></p>
                <p className='  text-2xl hover:text-red-600'><a href="mailto:sonfacksteve15@gmail.com"><SiGmail/></a></p>
                <p className='  text-2xl hover:text-blue-400'><a href="https://www.linkedin.com/in/steve-sonfack-kemdong" target="_blank" rel="noopener noreferrer"><FiLinkedin/></a></p>    
            </div> 
           <div className='text-center '>
            <p className="text-blue-950 dark:text-white pb-8">Designed and Build using React with heart by me! 
                <span className='text-green-400'>
                    <a href="https://github.com/sonsk" target="_blank" rel="noopener noreferrer">@sonsk</a>
                </span> {' '}or 
                <span className='text-green-400'>
                    <ScrollLink to="home" smooth="true">
                        <a href="">{' '}Sks{' '}</a>
                    </ScrollLink> 
                </span> 
                if you want
            </p>
           </div>
        </div>
    </div>
  )
}
