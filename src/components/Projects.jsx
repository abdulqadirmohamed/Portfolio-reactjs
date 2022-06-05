import React, { useState } from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    const [projects, setProjects] = useState([
        {
            id :1,
            title: 'ShipQuik Logistics', 
            info: 'A proposed website for a logistics company based in Lagos.',
            tags: ['Reactjs', 'Tailwind CSS']
        },
        {
            id :2,
            title: 'Task Manager', 
            info: 'A task manager app built with React'},
   
    ])
  return (
    <div className='mt-8'>
       <h1 className='text-2xl font-medium'>Projects</h1>
       {/* cards */}
       <div className='mt-8 md:grid grid-cols-3 md:gap-4'>
           {projects.map((project)=>(
               <ProjectCard key={project.id} title={project.title} info={project.info} tags={project.tags}/>
           ))}
       </div>
    </div>
  )
}

export default Projects