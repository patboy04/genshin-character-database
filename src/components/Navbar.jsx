import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
    const activeLink = {
        fontSize: "2.2rem"


    }

  return (
    <div className='w-full h-full bg-[#EDE5D8]'>
        <div className='flex justify-center items-end p-4 md:p-8 gap-8'>
            <NavLink to='artifacts' className='text-lg sm:text-xl xl:text-2xl text-center text-[#4B5366] ' style={({isActive})=> isActive ? activeLink : null}>
                Artifacts
            </NavLink>
            <NavLink to='.' className='text-lg sm:text-xl xl:text-2xl text-center text-[#4B5366] ' style={({isActive})=> isActive ? activeLink : null} end>
                Characters
            </NavLink>
            <NavLink to='artifacts'  className='text-lg sm:text-xl xl:text-2xl text-center text-[#4B5366] 'style={({isActive})=> isActive ? activeLink : null}>
                Weapons
            </NavLink>
        </div>
        <Outlet />
    </div>
  )
}

export default Navbar