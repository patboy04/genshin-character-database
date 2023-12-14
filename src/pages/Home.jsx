import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Pagination from '../components/Pagination'

export const loader = async() => {
    const res = await fetch('https://api.genshin.dev/characters')
    if(!res.ok) {
        throw new Error(("Failed to load characters"))
    }
    const data = await res.json()
    return data
}
const Home = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const data = useLoaderData()
    
    //pagination logic
    const finalIndex = currentPage * 12;
    const initalIndex = finalIndex - 12;
    const characters = data.slice(initalIndex, finalIndex)

    const renderCharacters = characters.map((character, index) => {
        //string manipulations for chars with hyphen
        let modChar = character.replace("-", "_")
        //string manipulations for chars with lastname, firstname convention
        switch(modChar) {
            case 'ayaka':
                modChar = "kamisato_ayaka";
                break;
            case 'ayato':
                modChar = "kamisato_ayato";
                break;
            case 'kazuha':
                modChar = "kaedehara_kazuha";
                break;
            case 'kokomi':
                modChar = "sangonomiya_kokomi";
                break;
            case 'raiden':
                modChar = "raiden_shogun";
                break;
            case 'sara':
                modChar = "kujou_sara";
                break;
        }
        return (
            <div key={index} className='from-[#52647a] bg-gradient-to-b flex flex-col shadow-2xl drop-shadow-2xl rounded-xl hover:scale-105 duration-500 cursor-pointer'>
                <h1 className='text-[8px] sm:text-base text-[white] text-center bg-[#52647A] p-1'>{modChar.replace("_", " ").toUpperCase()}</h1>
                <img src={`https://paimon.moe/images/characters/full/${modChar}.png`} className='object-cover w-full h-full p-2'/>
            </div>
        )
    })

  return (
    <div className='w-full h-full bg-[#EDE5D8]'>
        <h1 className='text-3xl sm:text-4xl xl:text-5xl  text-center text-[#4B5366] p-4 md:p-8'>Characters</h1>
        <div className='grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-6 auto-rows-fr p-4 md:p-8 xl:p-14 m-auto gap-10'>
            {renderCharacters}
        </div>
        <Pagination totalPosts={data.length} postsPerPage={12} setCurrentPage={setCurrentPage}/>

    </div>
  )
}

export default Home