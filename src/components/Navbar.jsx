import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
    const activeLink = {
        textDecoration: "underline",
        pointerEvents: "none",
        cursor: "pointer"
    }

  return (
    <div className='w-full h-full bg-[#EDE5D8]'>
        <div className='flex justify-center items-end p-4 md:p-8 gap-8'>
            <NavLink to='artifacts' className='sm:text-lg xl:text-xl text-center text-[#4B5366] hover:scale-110 duration-300' style={({isActive})=> isActive ? activeLink : null}>
                Artifacts
            </NavLink>
            <NavLink to='.' className='sm:text-lg xl:text-xl text-center text-[#4B5366] hover:scale-110 duration-300' style={({isActive})=> isActive ? activeLink : null} end>
                Characters
            </NavLink>
            <NavLink to='weapons'  className='sm:text-lg xl:text-xl text-center text-[#4B5366] hover:scale-110 duration-300'style={({isActive})=> isActive ? activeLink : null}>
                Weapons
            </NavLink>
        </div>
        <Outlet />
    </div>
  )
}

export default Navbar