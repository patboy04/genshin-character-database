import React from 'react'
import { getCharacter } from '../api';
import { useLoaderData } from 'react-router-dom';
import { modifyInazumanName } from '../utils';

export const loader = async({ request }) => {
  const url = new URL(request.url);
  const specificCharacter = url.searchParams.get("character");
  const character = getCharacter(specificCharacter);
  return character;
}

const Character = () => {
  const character = useLoaderData();
  const modifiedName = modifyInazumanName(character.name);

  return (
    <div className='w-full h-full bg-[#EDE5D8]'>
      <img 
        src={`https://paimon.moe/images/characters/full/${modifiedName.toLowerCase()}.png`}
        className=''
      />
    </div>
  )
}

export default Character