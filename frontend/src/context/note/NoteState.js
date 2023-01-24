import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const url = 'http://localhost:5000'
    const initialNotes = []
      const [notes,setNotes] = useState(initialNotes)
      // eslint-disable-next-line
      // Add Note

      const getNotes = async ()=>{
        // api calls
        const response = await fetch(`${url}/api/notes/getnotes`, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiYWY5NWViY2IzNjJlOWRhZGZmYTUyIn0sImlhdCI6MTY3NDA3NDQ1Nn0.YrAoCgzzH1FtRTRfXNakUDeYT9DgbZxZwYfUwGLKvAY'
          },
        });
        const json = await response.json()
        console.log(json);
        setNotes(json)
      }

      const addNote = async (title,description,tag)=>{
        // api calls
        const response = await fetch(`${url}/api/notes/addnote`, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiYWY5NWViY2IzNjJlOWRhZGZmYTUyIn0sImlhdCI6MTY3NDA3NDQ1Nn0.YrAoCgzzH1FtRTRfXNakUDeYT9DgbZxZwYfUwGLKvAY'
          },
          body: JSON.stringify({title,description,tag}) // body data type must match "Content-Type" header
        });

        const note = {
          "title": title,
          "description": description,
          "tag": tag
        }
        setNotes(notes.concat(note))
      }

      // Update Note
      const updateNote = async (id,title,description,tag)=>{
        // api calls
        const response = await fetch(`${url}/api/notes/updatenote/63c859a34b3e6a9a80f82015`, {
          method: 'PUT', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiYWY5NWViY2IzNjJlOWRhZGZmYTUyIn0sImlhdCI6MTY3NDA3NDQ1Nn0.YrAoCgzzH1FtRTRfXNakUDeYT9DgbZxZwYfUwGLKvAY'
          },
          body: JSON.stringify(title,description,tag) // body data type must match "Content-Type" header
        });
        const json = response.json()

        for(let i=0; i<notes.length; i++){
          const element = notes[i]
          if(element._id===id){
            element.title=title
            element.description=description
            element.tag=tag
          }
        }
      }
      // Delete Note
      const deleteNote = async (id)=>{
        // Api Call
        const response = await fetch(`${url}/api/notes/deletenote/${id}`, {
          method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiYWY5NWViY2IzNjJlOWRhZGZmYTUyIn0sImlhdCI6MTY3NDA3NDQ1Nn0.YrAoCgzzH1FtRTRfXNakUDeYT9DgbZxZwYfUwGLKvAY'
          },
        });
        const newNotes = notes.filter((note)=>{ return note._id!==id})
        setNotes(newNotes)
      }
    return(
        <NoteContext.Provider value={{notes,setNotes, addNote, updateNote, deleteNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState