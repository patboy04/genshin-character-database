import React from 'react'
import { getCharacter } from '../api';
import { useLoaderData } from 'react-router-dom';
import { modifyLongName } from '../utils';

export const loader = async({ request }) => {
  const url = new URL(request.url);
  const specificCharacter = url.searchParams.get("character");
  const character = getCharacter(specificCharacter);
  return character;
}

const Character = () => {
  const character = useLoaderData();
  const modifiedName = modifyLongName(character.name);

  return (
    <div className='w-full h-full bg-[#EDE5D8] p-10 flex flex-col md:flex-row'>
      <img 
        src={`https://paimon.moe/images/characters/full/${modifiedName.toLowerCase()}.png`}
        className='absoulute w-full m-3 md:w-[40vw]'
      />
      <div className='flex flex-col bg-white rounded-2xl drop-shadow-2xl p-3 md:p-5 hover:scale-105 duration-200'>
        <h1 className='text-2xl md:text-4xl mb-2'>{modifiedName.replace("_", " ").toUpperCase()}</h1>
        <div className='grid grid-cols-2 gap-5'>
          <div className='relative'>
            <p className='md:text-xl '>Rarity</p>
            <p className='absolute bottom-0 left-0 md:text-xl'>{character.rarity == 5 ? "⭐⭐⭐⭐⭐" : "⭐⭐⭐⭐"}</p>
          </div>
          <div>
            <p className='md:text-xl '>Vision</p>
            <img 
              className='w-[40px]'
              src={`https://paimon.moe/images/elements/${character.vision.toLowerCase()}.png`}
            />
          </div>
          <div>
            <p className='md:text-xl '>Weapon</p>
            <p className='text-sm md:text-lg'>{character.weapon}</p>
          </div>
          <div>
            <p className='md:text-xl '>Title</p>
            <p className='text-sm md:text-lg'>{character.title ? character.title : "N/A"}</p>
          </div>
        </div>
        <h1 className='mt-5 mb-2 md:text-xl'>Overview</h1>
        <p className='text-xs md:text-base'>{character.description ? character.description : "N/A"}</p>

      </div>
    </div>
  )
}

export default Character