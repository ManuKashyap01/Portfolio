import React, { useState } from 'react'
import {Experience,Education,Skills,Blogs}from '../assets/info.jsx'
import { BlogComp, EduComp, ExpComp, SkillComp } from '../components/Details.jsx'
const Resume = () => {
  const options = [
    {
      title:'Experience',
      desc:'My experience as a Software Developer at Corning Inc. involves specializing in 5GNR Layer 1 protocol development, multi-threading in C, Linux, and wireless telecommunications.',
      comp:<ExpComp/>
    },
    {
      title:'Education',
      desc:"I am currently pursuing a Master’s in Data Science at Chandigarh University (2024-Ongoing) and enrolled in the A-Z Machine Learning course on Udemy, following the completion of my Bachelor of Technology from Guru Gobind Singh Indraprastha University (2020-2024).",
      comp:<EduComp/>
    },
    {
      title:'Skills',
      desc:'My skills include programming languages such as Python, C/C++, and JavaScript. In web development, I have experience with HTML, CSS, React.js, and Node.js. I am proficient in MySQL for database management and have decent knowledge of Machine Learning (ML). Additionally, I am skilled in using Excel for data analysis.',
      comp:<SkillComp/>
    },
    {
      title:'Blogs',
      desc:"This is something I've always wanted to do, so stay tuned . . . coming soon!",
      comp:<BlogComp/>
    },
  ]
  const [active, setActive] = useState('Experience')
  return (
    <div className='sm:flex sm:gap-8 my-6 sm:my-10 resume'>
      {/* options */}
      <div className='sm:max-w-[380px]'>
        <h1 className='md:text-5xl text-4xl'>Why hire me?</h1>
        <p className='sm:my-6 my-4 text-md'>With a Master's in Data Science and experience as a Software Developer at Corning Inc., I bring strong skills in Python, Machine Learning, web development, and data analysis.</p>
        <div className='flex flex-col items-stretch gap-4'>
          {options.map((item,index)=>{
            return <button key={index} onClick={()=>setActive(item.title)} className={`shadow-soft rounded-md py-2 ${item.title === active ? 'bg-primary-event':''}`}>{item.title}</button>
          })}
        </div>
      </div>
      {/* options content */}
      <div className='sm:max-w-[480px] sm:w-full sm:mt-0 mt-6'>
          {options
            .filter((item)=>{
              return active === item.title
            })
            .map((item)=>{
              return <div key={item.title} className="">
                <h1 className="text-3xl">{item.title}</h1>
                <p className="my-4 text-md">{item.desc}</p>
                <div className='sm:max-h-[50vh] p-2 overflow-auto resume_items'>{item.comp}</div>
              </div>
            })
          }
      </div>
    </div>
  )
}

export default Resume