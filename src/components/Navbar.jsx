import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { IoMenu,IoClose } from "react-icons/io5";
const Navbar = () => {
    const [showMobile, setShowMobile] = useState(false)
    return (
    <div className='flex justify-between w-full items-center'>
        {/* logo */}
        <h1 className="text-lg font-bold">Manu <span className="text-accent-taupe">.</span></h1>
        {/* desktop */}
        <div className="sm:block hidden">
            <ul className='flex gap-5'>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/work">Work</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        </div>
        {/* mobile */}
        <div className="sm:hidden block">
            {showMobile?<IoClose className='text-xl' onClick={()=>setShowMobile(false)}/>:<IoMenu className='text-xl' onClick={()=>setShowMobile(true)}/>}
            {showMobile && 
            <div className="py-12 absolute left-1/4 right-0 top-0 bottom-0 z-10  bg-primary-shadow text-primary-background">
                <IoClose className='text-xl fixed top-6 right-5' onClick={()=>setShowMobile(false)}/>
                <ul className='flex gap-5 flex-col items-center'>
                    <Link onClick={()=>setShowMobile(false)} to="/">Home</Link>
                    <Link onClick={()=>setShowMobile(false)} to="/resume">Resume</Link>
                    <Link onClick={()=>setShowMobile(false)} to="/work">Work</Link>
                    <Link onClick={()=>setShowMobile(false)} to="/contact">Contact</Link>
                </ul>
            </div>}
        </div>
    </div>
  )
}

export default Navbar