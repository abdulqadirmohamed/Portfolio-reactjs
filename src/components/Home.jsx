import React from 'react'
import Profile from './Profile'
import Projects from './Projects'

const Home = () => {
  return (
    <div className='w-[80%] mx-auto'>
        <Profile/>
        <Projects/>
    </div>
  )
}

export default Home