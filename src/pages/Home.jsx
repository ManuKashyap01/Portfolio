import React from 'react'
import photo from "../assets/profile.jpg"
import { FaGithub,FaLinkedin } from "react-icons/fa";
const Home = () => {
  return (
    <div className='flex sm:items-center my-6 sm:my-10 sm:flex-row gap-6 flex-col sm:flex-1'>
        {/* content */}
        <div>
            <p className='text-lg italic'>Software Developer</p>
            <h1 className='sm:text-7xl mt-1 font-semibold text-4xl'>Hello I'm</h1>
            <h1 className='sm:text-7xl mt-1 font-semibold text-4xl text-accent-action'>Manu Kashyap</h1>
            <p className='mt-2'>I’m a software developer with a strong background in C programming, web development, and data structures. Recently, my passion for data science has led me to develop skills in SQL, Python, and Excel.</p>
            <div className='flex flex-row mt-4 gap-4'>
                {/* cv and links */}
                <button className='rounded-md px-2 py-1 shadow-soft'>DOWNLOAD CV</button>
                <button className='rounded-md px-2 py-1 shadow-soft'><FaGithub/></button>
                <button className='rounded-md px-2 py-1 shadow-soft'><FaLinkedin/></button>
            </div>
        </div>
        <div className='sm:order-last order-first'>
            {/* photo */}
            <img className='rounded-md shadow-medium' src={photo} alt="" />
        </div>
    </div>
  )
}

export default Home