import React from 'react'
import { useState , useEffect} from 'react';
import { deleteNote, editNote} from '../api';
import { Link, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { useLocation } from 'react-router-dom';



function Edit() 
{
    const [newNote, setnewNote] = useState("")
    const [Title, setTitle] = useState('')
    const [isloading, setisloading] = useState(false);
    const {state}= useLocation()
    const {data}=state
    const navigate = useNavigate();

  
    useEffect(() => {
    setTitle(data.Title)
  setnewNote(data.Note)
 },[isloading])
  
  
    const updateNotef=async()=>{
      await editNote(data._id,{Title:Title,Note:newNote})
      // setupdate(null)
      // setnewNote("")
      // setisloading(!isloading)
      // navigate('/')
      }
  
  
      const deleteNotef=async(id)=>{
         await deleteNote(id)
         setisloading(!isloading)
         navigate('/')
      }
  return (
    <div>
  
    {/* <div className='fixed top-16 left-1/4 ml-40'> */}
    <div className='fixed top-5 w-full'>
       {/* input section */}
       <div>
      <form className='absolute flex flex-col gap-3 'key={data._id}>
        <input
          className='bg-black fixed left-0 rounded-md p-3 mb-2 w-full'
          type="text"
          value={Title}
          onChange={(event) => { setTitle(event.target.value) }}/>
          <textarea 
          rows={20}
          cols={10}
          className='bg-black fixed left-0 mt-16 rounded-md p-3 mb-2 w-full'
          placeholder='Enter Notes...'
          value={newNote}
          onChange={(event) => { setnewNote(event.target.value) }}/>
   
    <div className='fixed bottom-0 mb-3'>
    <Link to='/'>
      <div className='fixed bottom-0 left-28 mb-3'>     
        <button className='bg-green-700 '
          onClick={updateNotef}>
          UPDATE
        </button>
        </div>
        </Link>
        <div className='fixed bottom-0 mb-5'>
        <MdDelete className='size-8 ' onClick={() => {deleteNotef(data._id)}}/>
        </div>
  
        <div className='fixed bottom-0 right-28 mb-3'>
        <button className='bg-rose-800 'onClick={()=>{navigate('/')}}>
          Discard
        </button>
        </div>
  
        </div> </form>
    </div>  
    </div>
  </div>
  )
}

export default Edit