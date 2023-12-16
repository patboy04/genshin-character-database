import React, { useState } from 'react'
import { useLoaderData, useSearchParams, Link } from 'react-router-dom';
import Pagination from '../components/Pagination';
import { getData } from '../api'
import { modifyArtifactName, modifyString } from '../utils';

export const loader = () => {
    const artifacts = getData("artifacts");
    return artifacts;
}

const Artifact = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const data = useLoaderData();
    const [searchParams, setSearchParams] = useSearchParams();
    const pageFilter = searchParams.get("pageNumber");

    //pagination logic
    const finalIndex = pageFilter ? pageFilter * 8 : currentPage * 8;
    const initalIndex = finalIndex - 8;
    const artifacts = data.slice(initalIndex, finalIndex)

    const renderCharacters = artifacts.map((artifact, index) => {
        const modifiedName = modifyString(artifact);
        const modifiedArtifactName = modifyArtifactName(modifiedName);
        return (
            <div key={index} className='from-[#52647a] bg-gradient-to-b flex flex-col shadow-2xl drop-shadow-2xl rounded-xl hover:scale-105 duration-500 cursor-pointer'>
                <Link to={`artifact_details?artifact=${artifact}`} className='w-full h-[95%]'>
                    <h1 className='text-[8px] sm:text-base text-[white] text-center bg-[#52647A] p-1'>{modifiedName.replace(/_/g, " ").toUpperCase()}</h1>
                    <div className='grid grid-cols-3'>
                        <img src={`https://paimon.moe/images/artifacts/${modifiedArtifactName}_flower.png`} className='object-cover w-full h-full p-2'/>
                        <img src={`https://paimon.moe/images/artifacts/${modifiedArtifactName}_plume.png`} className='object-cover w-full h-full p-2'/>
                        <img src={`https://paimon.moe/images/artifacts/${modifiedArtifactName}_sands.png`} className='object-cover w-full h-full p-2'/>
                        <img src={`https://paimon.moe/images/artifacts/${modifiedArtifactName}_goblet.png`} className='object-cover w-full h-full p-2'/>
                        <img src={`https://paimon.moe/images/artifacts/${modifiedArtifactName}_circlet.png`} className='object-cover w-full h-full p-2'/>
                    </div>
                    
                </Link>
            </div>
        )
    })

  return (
    <div className='w-full h-full bg-[#EDE5D8]'>
        <div className='grid grid-cols-2 lg:grid-cols-4 auto-rows-fr p-4 md:p-8 xl:px-14 m-auto gap-10'>
            {renderCharacters}
        </div>
        <Pagination totalPosts={data.length} postsPerPage={8} setCurrentPage={setCurrentPage}/>

    </div>
  )
}

export default Artifact