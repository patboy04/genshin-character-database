import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
    const activeLink = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

  return (
    <div className='w-full h-full bg-[#EDE5D8]'>
        <div className='flex justify-center items-end p-4 md:p-8 gap-8'>
            <NavLink to='artifacts' style={({isActive})=> isActive ? activeLink : null}>
                <h1 className='text-lg sm:text-xl xl:text-2xl text-center text-[#4B5366] '>
                    Artifacts
                </h1>
            </NavLink>
            <NavLink to='.' style={({isActive})=> isActive ? activeLink : null} end>
                <h1 className='text-3xl sm:text-4xl xl:text-5xl text-center text-[#4B5366] '>
                    Characters
                </h1>
            </NavLink>
            <NavLink to='artifacts' style={({isActive})=> isActive ? activeLink : null}>
                <h1 className='text-lg sm:text-xl xl:text-2xl text-center text-[#4B5366] '>
                    Weapons
                </h1>
            </NavLink>
        </div>
        <Outlet />
    </div>
  )
}

export default Navbar