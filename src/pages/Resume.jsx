import React, { useState } from 'react'
import {Experience,Education,Skills,Blogs}from '../assets/info.jsx'
import { BlogComp, EduComp, ExpComp, SkillComp } from '../components/Details.jsx'
const Resume = () => {
  const options = [
    {
      title:'Experience',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatem ducimus, inventore sequi illo molestias!',
      comp:<ExpComp/>
    },
    {
      title:'Education',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatem ducimus, inventore sequi illo molestias!',
      comp:<EduComp/>
    },
    {
      title:'Skills',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatem ducimus, inventore sequi illo molestias!',
      comp:<SkillComp/>
    },
    {
      title:'Blogs',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatem ducimus, inventore sequi illo molestias!',
      comp:<BlogComp/>
    },
  ]
  const [active, setActive] = useState('Experience')
  return (
    <div className='sm:flex sm:gap-8 my-6 sm:my-10'>
      {/* options */}
      <div className>
        <h1 className='md:text-5xl text-3xl sm:max-w-[380px]'>Why hire me?</h1>
        <p className='sm:py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, maiores.</p>
        <div className='flex flex-col items-stretch gap-4'>
          {options.map((item,index)=>{
            return <button key={index} onClick={()=>setActive(item.title)} className={`shadow-soft rounded-md py-2 ${item.title === active ? 'bg-primary-event':''}`}>{item.title}</button>
          })}
        </div>
      </div>
      {/* options content */}
      <div className='sm:max-w-[480px] sm:w-full'>
          {options
            .filter((item)=>{
              return active === item.title
            })
            .map((item)=>{
              return <div key={item.title} className="">
                <h1 className="text-3xl">{item.title}</h1>
                <p className="my-4">{item.desc}</p>
                <div className='sm:max-h-[50vh] p-2 overflow-auto'>{item.comp}</div>
              </div>
            })
          }
      </div>
    </div>
  )
}

export default Resume