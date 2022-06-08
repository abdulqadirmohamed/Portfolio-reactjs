import React, { useState } from 'react'
import {db} from '../firebase'
import {addDoc, collection, doc} from 'firebase/firestore'
import { async } from '@firebase/util'

const Admin = () => {
    const [title, setTitle] = useState("")
    const [info, setInfo] = useState("")
    const [demo, setDemo] = useState("")
    const [repo, setRepo] = useState("")
    const [tags, setTags] = useState([])

    const projectCollectionRef = collection(db, 'projects')

    const createPost = async () =>{
        // await addDoc(projectCollectionRef, { title: title});
        await addDoc(projectCollectionRef, 
            { 
                title: title, 
                info: info,
                demo: demo,
                github: repo,
                tags: tags
            });
    }

  return (
    <div className='md:w-[60%] w-[95%] mx-auto  p-10'>
        {/* title */}
        <div className='my-2'>
            <label className='block text-lg  my-1'>Project Title</label>
            <input 
                onChange={(e) => {setTitle(e.target.value);}} 
                className='form-input' placeholder='Demo App' type="text" 
            />
        </div>

        {/* into */}
        <div className='my-4'>
            <label className='block text-lg  my-1'>Project Brief</label>
            <textarea
                onChange={(e) => {setInfo(e.target.value);}} 
                className='form-input' placeholder='Demo App' type="text" />
        </div>

        {/* demo and repo */}
        <div className='flex justify-between gap-4 my-4'>
            <div className='flex-1'>
                <label className='block text-lg  my-1'>Demo Link</label>
                <input 
                    onChange={(e) => {setDemo(e.target.value);}} 
                    className='form-input' placeholder='Demo App' type="text" />
            </div>
            <div className='flex-1'>
                <label className='block text-lg  my-1'>Project Repo</label>
                <input 
                    onChange={(e) => {setRepo(e.target.value);}} 
                    className='form-input' placeholder='Demo App' type="text" />
            </div>
        </div>

        {/* tags */}
        <div className='my-4'>
            <label className='block text-lg  my-1'>Project Tags</label>
            <input 
                onChange={(e) => {setTags(e.target.value);}} 
                className='form-input' placeholder='Tags' type="text" />
        </div>

        {/* Botton */}
        <div>
            <button onClick={createPost} className='btn'>Post</button>
        </div>
    </div>
  )
}

export default Admin