import React, { useState } from 'react'
import { Projects } from '../assets/info'
import Project from '../components/Project'
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
const Work = () => {
  const handleLeftClick = ()=>{
    let nextIndex = active - 1
    if(nextIndex == -1)
      nextIndex = Projects.length-1

    setActive(nextIndex)
  }
  const handleRightClick = ()=>{
    let nextIndex = active + 1
    if(nextIndex == Projects.length)
      nextIndex = 0

    setActive(nextIndex)
  }
  const [active, setActive] = useState(0)
  return (
    <div className='sm:mt-10 mt-6'>
      <Project project={Projects[active]}/>
      <div className='flex gap-3 mt-4'>
        <button className='p-3 rounded-md shadow-soft text-center text-xl bg-accent-taupe text-primary-background hover:bg-primary-event hover:text-accent-taupe' onClick={handleLeftClick}><FaChevronLeft/></button>
        <button className='p-3 rounded-md shadow-soft text-center text-xl bg-accent-taupe text-primary-background hover:bg-primary-event hover:text-accent-taupe' onClick={handleRightClick}><FaChevronRight/></button>
      </div>
    </div>
  )
}

export default Work