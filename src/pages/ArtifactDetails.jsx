import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { getData } from '../api'

export const loader = async({ request }) => {
    const url = new URL(request.url);
    const specificArtifact = url.searchParams.get("artifact");
    const artifact = getData("artifacts", specificArtifact);
    return artifact;
}

const ArtifactDetails = () => {
    const artifact = useLoaderData();
    const modifyName = artifact.name.replace(/ /g, "_").replace(/'s/g, "s")
    console.log(artifact)

  return (
    <div className='w-full h-full items-start bg-[#EDE5D8] p-10 flex flex-col xl:flex-row'>
        <div className='w-full xl:w-[50vw] grid grid-cols-3 m-3 object-cover justify-items-center '>
            <img src={`https://paimon.moe/images/artifacts/${modifyName.toLowerCase()}_flower.png`} className='w-[256px]'/>
            <img src={`https://paimon.moe/images/artifacts/${modifyName.toLowerCase()}_plume.png`} className='w-[256px]'/>
            <img src={`https://paimon.moe/images/artifacts/${modifyName.toLowerCase()}_sands.png`} className='w-[256px]'/>
            <img src={`https://paimon.moe/images/artifacts/${modifyName.toLowerCase()}_goblet.png`} className='w-[256px]'/>
            <img src={`https://paimon.moe/images/artifacts/${modifyName.toLowerCase()}_circlet.png`} className='w-[256px]'/>
        </div>
        <div className='w-full xl:w-[50vw] flex flex-col bg-white rounded-2xl drop-shadow-2xl p-3 md:p-5 hover:scale-105 duration-200'>
            <h1 className='text-xl md:text-2xl my-4'>{artifact.name}</h1>
            <h1 className='text-sm md:text-lg my-2'>2pc bonus: {artifact["2-piece_bonus"]}</h1>
            <h1 className='text-sm md:text-lg my-2'>4pc bonus: {artifact["4-piece_bonus"]}</h1>
        </div>
    </div>
  )
}

export default ArtifactDetails