import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { colorStyle, modifyLongName, nationImage } from '../utils';
import { getCharacter } from '../api';

export const loader = async({ request }) => {
  const url = new URL(request.url);
  const specificCharacter = url.searchParams.get("character");
  const character = getCharacter(specificCharacter);
  return character;
}

const CharacterDetails = () => {
  //character data from fetch request on loader
  const character = useLoaderData();
  //modify the name to fit the convention I used if(lastName_firstName)
  const modifiedName = modifyLongName(character.name);
  
  //styling depending on the character's nation
  const characterNation = character.nation.toLowerCase();
  const nationStyleText = {
    color: colorStyle(characterNation)
  };

  const nationStyleBg = {
    backgroundImage: nationImage(characterNation)
  };

  return (
    <div className='w-full h-full bg-[#EDE5D8] p-10 flex flex-col lg:flex-row'>
      <img 
        src={`https://paimon.moe/images/characters/full/${modifiedName.toLowerCase()}.png`}
        className='absoulute w-full m-3 lg:w-[40vw] object-cover'
      />
      <div className='flex flex-col bg-white rounded-2xl drop-shadow-2xl p-3 md:p-5 hover:scale-105 duration-200'>
        <div className='flex justify-between p-2 my-2 rounded-lg' style={nationStyleBg}>
          <h1 className='text-2xl md:text-4xl text-white mt-auto'>{modifiedName.replace("_", " ").toUpperCase()}</h1>
          <img
            src={`https://paimon.moe/images/characters/${modifiedName.toLowerCase()}.png`}
            className='w-20 md:w-28'
          />
        </div>
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
          <div>
            <p className='md:text-xl '>Nation</p>
            <p className='text-sm md:text-lg' style={nationStyleText}>{character.nation}</p>
          </div>
          <div>
            <p className='md:text-xl '>Affiliation</p>
            <p className='text-sm md:text-lg'>{character.affiliation}</p>
          </div>
        </div>
        <h1 className='mt-5 mb-2 md:text-xl'>Overview</h1>
        <p className='text-xs md:text-base'>{character.description ? character.description : "N/A"}</p>
        <h1 className='mt-5 mb-2 md:text-xl'>Gameplay</h1>
        <h1 className='md:text-xl'>NA: {character.skillTalents[0].name}</h1>
        <p className='text-xs md:text-base'>{character.skillTalents[0].description}</p>
        
        <h1 className='mt-5 md:text-xl'>SKILL: {character.skillTalents[1].name}</h1>
        <p className='text-xs md:text-base'>{character.skillTalents[1].description}</p>
        <h1 className='mt-5 md:text-xl'>BURST: {character.skillTalents[2].name}</h1>
        <p className='text-xs md:text-base'>{character.skillTalents[2].description}</p>
      </div>
    </div>
  )
}

export default CharacterDetails