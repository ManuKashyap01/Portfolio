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
        <h1 className="sm:font-semibold sm:text-4xl mt-3 text-2xl uppercase">
          <span className="sm:font-extrabold sm:block sm:mb-6 font-semibold text-3xl sm:text-[7rem] sm:leading-none">@{project.id} </span>
          {project.title}</h1>
        <p className="italic sm:text-lg my-2 sm:my-3">{project.desc}</p>
        <p className="font-semibold text-accent-action sm:text-xl">{project.techStack}</p>
        <div className='flex gap-4 sm:mt-4 mt-2'>
          {project.liveURL && <Link to={project.liveURL} className='text-3xl hover:bg-accent-action shadow-soft p-2 rounded-[50%]' target='_blank'><FaLink/></Link>}
          <Link to={project.githubURL} className='text-3xl shadow-soft hover:bg-accent-action p-2 rounded-[50%]' target='_blank'><FaGithub/></Link>
        </div>
      </div>
    </div>
  )
}

export default Project