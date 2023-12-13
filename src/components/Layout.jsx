import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <header>
            <div className='w-full h-[80px] bg-[#EBD9BD] drop-shadow-md flex flex-col justify-center'>
                <h1 className='text-[#4B5366] text-center md:text-xl lg:text-2xl'>✨Genshin Impact Character Database✨</h1>
            </div>
        </header>
        <Outlet/>
    </div>
  )
}

export default Layout