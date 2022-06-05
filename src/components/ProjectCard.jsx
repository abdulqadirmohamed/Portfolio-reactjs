import React from 'react'
import {AiFillGithub } from 'react-icons/ai' 
import {BiLinkExternal } from 'react-icons/bi' 

const ProjectCard = ({title, info, tags}) => {
  return (
    <div>
            {/* card */}
            <div className='bg-gray-800 rounded p-4 w-80 h-48'>
                {/* title and icon */}
                <div className='flex justify-between'>
                    <h1 className='text-xl flex-1'>{title}</h1>
                    <div className='flex gap-4 my-2'>
                        <a href="#"><AiFillGithub size={20} /></a>
                        <a href="#"><BiLinkExternal size={20} /></a>
                    </div>
                </div>
                {/* info */}
                <div className='my-4 text-ellipsis overflow-hidden'>
                    <p>{info}</p>
                </div>
                {/* tags */}
                <div className='flex gap-2'>
                    <span className='bg-[#481261] text-sm px-2 py-1'>{tags}</span>
                </div>
            </div>
    </div>
  )
}

export default ProjectCard