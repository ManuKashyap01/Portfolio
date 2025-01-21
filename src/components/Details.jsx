import React from 'react'
import {Experience,Education,Skills,Blogs}from '../assets/info.jsx'

export const ExpComp = () => {
  return (
    <div className='flex flex-wrap sm:justify-start justify-center gap-4'>
        {Experience.map((item)=>{
            return <div key={item.year} className="flex bg-accent-taupe text-primary-background rounded-md gap-2 p-4 sm:max-w-[200px] max-w-[275px] w-full flex-col shadow-soft">
                <p>{item.year}</p>
                <h2 className="text-2xl">{item.title}</h2>
                <p className="italic">{item.company}</p>
            </div>
        })}
    </div>
  )
}

export const EduComp = () => {
  return (
    <div className='flex flex-wrap sm:justify-start justify-center gap-4'>
        {Education.map((item)=>{
            return <div key={item.year} className="flex bg-accent-taupe text-primary-background rounded-md gap-2 p-4 sm:max-w-[200px] max-w-[275px] w-full flex-col shadow-soft">
                <p>{item.year}</p>
                <h2 className="text-2xl">{item.course}</h2>
                <p className="italic">{item.institute}</p>
            </div>
        })}
    </div>
  )
}

export const SkillComp = () => {
  return (
    <div className='flex flex-wrap sm:justify-start justify-center gap-4'>
        {Skills.map((item)=>{
            return <div key={item.title} className="flex bg-accent-taupe text-primary-background rounded-md gap-2 rounded-md p-4 sm:max-w-[90px] max-w-[120px] w-full flex-col items-center shadow-soft text-center">
                <div className='text-4xl'>{item.icon}</div>
                <p className="italic">{item.title}</p> 
            </div>
        })}
    </div>
  )
}

export const BlogComp = () => {
  return (
    <div className='flex flex-wrap gap-4'>
        {Blogs.map((item)=>{
            return <div key={item.title} className="flex gap-2 rounded-md p-4 max-w-[100px] w-full flex-col items-center shadow-soft text-center">
                <div className='text-4xl'>{item.icon}</div>
                <p className="italic">{item.title}</p> 
            </div>
        })}
    </div>
  )
}