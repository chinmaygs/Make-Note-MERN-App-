import React from 'react'
import { useState } from 'react';
import { addNote } from '../api';
import { useNavigate} from "react-router-dom";


function Add() {

  const [newNote, setnewNote] = useState("")
  const [Title, setTitle] = useState('')
  const [isloading, setisloading] = useState(false);
  const navigate = useNavigate();

    const addNotef=async() => {
      console.log('addNote')
      await addNote({Title:Title,Note:newNote})
      setnewNote("")
      setisloading(!isloading)
      navigate('/')
    }
  

  return (
    <div>
  
    {/* <div className='fixed top-16 left-1/4 ml-40'> */}
    <div className='fixed top-5 w-full'>
       {/* input section */}
       <div>
      <form className='absolute flex flex-col gap-3 '>
        <input
          className='bg-black fixed left-0 rounded-md p-3 mb-2 w-full  placeholder:text-xl'
          type="text"
          placeholder="Title"
          value={Title}
          onChange={(event) => { setTitle(event.target.value) }} />
          <textarea 
          rows={20}
          cols={10}
          className='bg-black fixed left-0 mt-16 rounded-md p-3 mb-2 w-full placeholder:text-xl'
          placeholder='Enter Notes...'
          value={newNote}
          onChange={(event) => { setnewNote(event.target.value) }}/>
    </form>
    <div className='fixed bottom-0 mb-3'>  
      <div className='fixed bottom-0 left-28 mb-3'>     
        <button className='bg-green-700 '
          onClick={addNotef}>
          ADD
        </button>
        </div>

        <div className='fixed bottom-0 right-28 mb-3'>
        <button className='bg-rose-800 'onClick={()=>{navigate('/')}}>
          Discard
        </button>
        </div>
      
        </div>
    </div>  
    </div>
  </div>
  )
}

export default Add