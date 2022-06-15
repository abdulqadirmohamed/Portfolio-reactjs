import React from 'react'
import { useEffect, useState } from 'react';
import Profile from './Profile'
import Projects from './Projects'
import Skill from './Skill';


const Home = () => {
  const [users, setUsers] = useState([])





  return (
    <div className='md:w-[80%] w-[90%] mx-auto pb-10 pt-5'>
        <Profile/>
        {/* <Skill/> */}
        <Projects/>
    </div>
  )
}

export default Home