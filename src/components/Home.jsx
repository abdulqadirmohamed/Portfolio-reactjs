import React from 'react'
import { useEffect, useState } from 'react';
import Profile from './Profile'
import Projects from './Projects'
import { db } from "../firebase";
import {getDocs, collection} from '../firebase/firestore'

const Home = () => {
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, "projects");

  useEffect(()=>{
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };
getUsers();
  },[])


  return (
    <div className='w-[80%] mx-auto'>
        <Profile/>
        <Projects/>
    </div>
  )
}

export default Home