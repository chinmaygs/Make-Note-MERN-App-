import axios from "axios"

const NoteUrl="http://localhost:3000/api/v1/Note"

export const getNote=async(id)=>{
    id=id || ''
return await axios.get(`${NoteUrl}/${id}`)
}

export const addNote= async(Note)=>{
    return await axios.post(`${NoteUrl}`,Note)
}

export const deleteNote= async(id)=>{
    return await axios.delete(`${NoteUrl}/${id}`)
}

export const editNote= async(id,Note)=>{
    return await axios.patch(`${NoteUrl}/${id}`,Note)
}