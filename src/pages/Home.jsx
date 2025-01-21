import React from 'react'
import photo from "../assets/profile.jpg"
import profile_4 from "../assets/profile_4.jpg"

import { FaGithub,FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='flex sm:items-center my-6 sm:my-10 sm:flex-row gap-6 flex-col'>
        {/* content */}
        <div className='sm:flex-[5] sm:w-full'>
            <p className='text-lg italic'>Software Developer</p>
            <h1 className='sm:text-7xl mt-1 font-semibold text-4xl'>Hello I'm</h1>
            <h1 className='sm:text-7xl mt-1 font-semibold text-4xl text-accent-taupe'>Manu Kashyap</h1>
            <p className='mt-2'>I’m a software developer with a strong background in C programming, web development, and data structures. Recently, my passion for data science has led me to develop skills in SQL, Python, and Excel.</p>
            <div className='flex flex-row items-center mt-4 gap-4'>
                {/* cv and links */}
                <a href='/manu_kashyap.pdf' download='manu_kashyap.pdf' className='rounded-md px-2 py-1 shadow-soft hover:bg-accent-taupe hover:text-primary-background font-medium'>DOWNLOAD CV</a>
                <Link to='https://github.com/ManuKashyap01' target='_blank' className='rounded-md px-2 py-2 shadow-soft hover:bg-accent-taupe hover:text-primary-background text-lg'><FaGithub/></Link>
                <Link to='https://www.linkedin.com/in/manu-kashyap' target='_blank' className='rounded-md px-2 py-2 shadow-soft hover:bg-accent-taupe hover:text-primary-background text-lg'><FaLinkedin/></Link>
            </div>
        </div>
        <div className='sm:order-last order-first sm:flex-[3] w-full'>
            {/* photo */}
            <img className='rounded-md shadow-medium' src={profile_4} alt="" />
        </div>
    </div>
  )
}

export default Home