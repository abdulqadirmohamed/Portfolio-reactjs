import React from 'react'
import { useEffect, useState } from 'react';
import Profile from './Profile'
import Projects from './Projects'


const Home = () => {
  const [users, setUsers] = useState([])





  return (
    <div className='md:w-[80%] w-[90%] mx-auto pb-10 pt-5'>
        <Profile/>
        <Projects/>
    </div>
  )
}

export default Home