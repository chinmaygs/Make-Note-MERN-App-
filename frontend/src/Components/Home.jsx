import React from 'react'
import { useState , useEffect} from 'react';
import { addNote, deleteNote, editNote, getNote } from '../api';
import { MdAddToPhotos } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

function Home() {

  const [Notes, setNotes] = useState([])
  const [isloading, setisloading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {getNotef()},[isloading])

  const getNotef=async() => {
    console.log('getNote')
    const response=await getNote()
    setNotes(response.data)
  }

    const deleteNotef=async(id)=>{
       await deleteNote(id)
       setisloading(!isloading)
    }
  
  return (
    <div className="App">
 <h1 className='fixed top-2 right-1/3 mr-24 font-sans text-yellow-400 '>MAKE - NOTES</h1> 
 {Notes.length==0 && 
        <div className='fixed top-16 right-1/3 mr-28 mt-8 '><div className='text-3xl text-blue-200'>No Notes !!!</div><div className='text-xl mt-5 text-blue-200'>Create Your First Note Here...</div></div>
        }
    <div className='w-full'>
    
 
        {/* Display Section */}
        <div className='grid grid-cols-4 gap-20'>

          {Notes.map((data) => {
            return (
            <div className='mx-4 my-4' key={data._id}>
              <div className='flex flex-col box-border h-48 w-48 p-4 border-4'>
              <div className='font-bold text-center'>{data.Title}</div>
              <div className='text-left'>{data.Note}</div>
                </div>
                <div className='flex flex-row gap-28 ml-3 mt-3'>
                <FiEdit className='size-8 ' onClick={() => {navigate('/Edit',{ state: { data } })}}/>
                <MdDelete className='size-8 ' onClick={() => {deleteNotef(data._id)}}/>
             </div>
              </div>)

          })}
            <div>
                 
                 {/* input section */}
        <div><Link to='/Add'><MdAddToPhotos className='relative size-44 top-2 left-6 hover:size-48'/></Link></div>
       </div>
        </div>
            

        </div>
      
    </div>

  )
}

export default Home