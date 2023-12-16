import React, { useState } from 'react'
import { useLoaderData, Link, useSearchParams } from 'react-router-dom'
import Pagination from '../components/Pagination'
import { getData } from '../api'
import { modifyString } from '../utils'

export const loader = async() => {
    const characters = getData("characters");
    return characters
}
const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const data = useLoaderData();
    const [searchParams, setSearchParams] = useSearchParams();
    const pageFilter = searchParams.get("pageNumber");

    //pagination logic
    const finalIndex = pageFilter ? pageFilter * 12 : currentPage * 12;
    const initalIndex = finalIndex - 12;
    const characters = data.slice(initalIndex, finalIndex)

    const renderCharacters = characters.map((character, index) => {
        const modifiedName = modifyString(character);
        return (
            <div key={index} className='from-[#52647a] bg-gradient-to-b flex flex-col shadow-2xl drop-shadow-2xl rounded-xl hover:scale-105 duration-500 cursor-pointer'>
                <Link to={`character?character=${character}`} className='w-full h-[95%]'>
                    <h1 className='text-[8px] sm:text-base text-[white] text-center bg-[#52647A] p-1'>{modifiedName.replace("_", " ").toUpperCase()}</h1>
                    <img src={`https://paimon.moe/images/characters/full/${modifiedName}.png`} className='object-cover w-full h-full p-2'/>
                </Link>
            </div>
        )
    })

  return (
    <div className='w-full h-full bg-[#EDE5D8]'>
        <div className='grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-6 auto-rows-fr p-4 md:p-8 xl:px-14 m-auto gap-10'>
            {renderCharacters}
        </div>
        <Pagination totalPosts={data.length} postsPerPage={12} setCurrentPage={setCurrentPage}/>

    </div>
  )
}

export default Home