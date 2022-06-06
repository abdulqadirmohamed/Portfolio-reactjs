import React from 'react'
import { AiOutlineTwitter, AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { FiCodepen } from 'react-icons/fi'

const Profile = () => {

    return (
        <div className='md:grid grid-cols-4 gap-8 pt-8'>
            {/* Info */}
            <div className='col-span-3'>
                <h1 className='text-2xl font-medium'>HI. I'm Abdulqadir Mohamed</h1>
                <div className='md:w-[90%] mt-2'>
                    <p>A Frontend web developer and technical writer from Somalia. 
                        I'm always learniing something new. Of recent, I have been 
                        learning more about the React Ecosystem, Next JS, Framer Motion, Auth0, Laravel, 
                        Tailwindcss and more.</p>
                </div>
                <div className='my-8'>
                    <a className='btn' href="mailto:cajiibxaaji02@gmail.com">Work with me</a>
                </div>
            </div>
            {/* Contact */}
            <div className=''>
                <h1 className='text-2xl font-medium'>Contact Me</h1>
                <div className='flex gap-4 my-2'>
                    <a href="#"><AiOutlineTwitter size={20} /></a>
                    <a href="#"> <FaLinkedinIn size={20} /></a>
                    <a href="#"> <FiCodepen size={20} /></a>
                    <a href="#"><AiFillGithub size={20} /></a>
                </div>
            </div>
        </div>
    )
}

export default Profile