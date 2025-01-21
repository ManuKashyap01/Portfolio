import React from 'react'
import { FaLink, FaGithub } from "react-icons/fa";
import { PiAppWindowFill } from "react-icons/pi";
import { Link } from 'react-router-dom';
const Project = ({project}) => {
  return (
    <div className='sm:flex sm:gap-8'>
      {/* image */}
      <div className='sm:flex-1 h-[70vh] overflow-hidden relative rounded-md shadow-soft'>
        <img className='object-cover w-full h-full top-0 left-0' src={project.img} alt="project image" />
      </div>
      {/* details */}
      <div className='sm:flex-1'>
        <div className="sm:font-extrabold items-center flex sm:gap-3 mt-4 mb-2 gap-2 font-semibold text-4xl sm:text-[7rem] sm:leading-none"><PiAppWindowFill/> <p>{project.id}</p></div>
        <h1 className="sm:font-semibold sm:mt-4 sm:text-4xl text-xl uppercase">
          {project.title}</h1>
        <p className="italic sm:text-lg my-2 sm:my-3">{project.desc}</p>
        <p className="font-semibold text-accent-action sm:text-xl">{project.techStack}</p>
        <div className='flex gap-4 sm:mt-4 mt-2'>
          {project.liveURL && <Link to={project.liveURL} className='text-3xl hover:bg-accent-taupe hover:text-primary-background shadow-soft p-2 rounded-[50%]' target='_blank'><FaLink/></Link>}
          <Link to={project.githubURL} className='text-3xl shadow-soft hover:bg-accent-taupe hover:text-primary-background p-2 rounded-[50%]' target='_blank'><FaGithub/></Link>
        </div>
      </div>
    </div>
  )
}

export default Project