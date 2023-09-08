import React from 'react'
import { Link } from 'react-router-dom'
import Theme from './Theme'


export default function Allprojects() {
  return (
    <div className='pt-12 w-10/12 mx-auto dark'>
        <div className='w-8/12 mx-auto flex justify-between '>
        
            <Link to='/' preventScrollReset={true} className='text-blue-950 text-xl dark:text-green-400'>Back to Home</Link>
            <Theme/>
        </div>
        <div className='pt-12'>
            <h3 className='text-blue-950  dark:text-green-400 text-center text-4xl font-bold'>All Projects</h3><br/>
            <p className='text-blue-950  dark:text-blue-950 text-center'>Coming soon! working on it</p>
        </div>

    </div>
  )
}
