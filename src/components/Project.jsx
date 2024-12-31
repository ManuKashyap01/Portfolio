import React from 'react'
import { FaLink, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Project = ({project}) => {
  return (
    <div className='sm:flex sm:gap-8'>
      {/* image */}
      <div className='sm:flex-1 max-h-[70vh] overflow-hidden rounded-md shadow-soft'>
        <img src={project.img} alt="product image" />
      </div>
      {/* details */}
      <div className='sm:flex-1'>
        <h1 className="sm:font-extrabold sm:text-9xl">@{project.id}</h1>
        <h1 className="sm:font-semibold sm:text-4xl sm:pt-6 uppercase">{project.title}</h1>
        <p className="italic sm:text-lg sm:py-3">{project.desc}</p>
        <p className="sm:font-semibold text-accent-action sm:text-xl">{project.techStack}</p>
        <div className='flex gap-4 pt-4'>
          <Link to={project.liveURL} className='text-3xl shadow-soft p-2 rounded-[50%]' target='_blank'><FaLink/></Link>
          <Link to={project.githubURL} className='text-3xl shadow-soft p-2 rounded-[50%]' target='_blank'><FaGithub/></Link>
        </div>
      </div>
    </div>
  )
}

export default Project