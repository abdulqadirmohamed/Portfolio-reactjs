import React from 'react'
import {AiFillGithub } from 'react-icons/ai' 
import {BiLinkExternal } from 'react-icons/bi' 

const ProjectCard = () => {
  return (
    <div>
            {/* card */}
            <div className='bg-gray-800 rounded p-4 w-80'>
                {/* title and icon */}
                <div className='flex justify-between'>
                    <h1 className='text-xl flex-1'>Food Menu</h1>
                    <div className='flex gap-4 my-2'>
                        <a href="#"><AiFillGithub size={20} /></a>
                        <a href="#"><BiLinkExternal size={20} /></a>
                    </div>
                </div>
                {/* info */}
                <div className='my-4 text-ellipsis overflow-hidden'>
                    <p>An application to search for different recipes built using the Edamam API.</p>
                </div>
                {/* tags */}
                <div className='flex gap-2'>
                    <span className='bg-[#481261] text-sm px-2 py-1'>React js</span>
                    <span className='bg-[#481261] text-sm px-2 py-1'>Tailwindcss</span>
                </div>
            </div>
    </div>
  )
}

export default ProjectCard