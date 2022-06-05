import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='mt-8'>
       <h1 className='text-2xl font-medium'>Projects</h1>
       {/* cards */}
       <div className='mt-8 md:grid grid-cols-3 md:gap-4'>
           <ProjectCard/>
           <ProjectCard/>
           <ProjectCard/>
           <ProjectCard/>
       </div>
    </div>
  )
}

export default Projects