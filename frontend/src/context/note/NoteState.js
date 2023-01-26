import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = 'http://localhost:5000'
  const initialNotes = []
  const [notes, setNotes] = useState(initialNotes)
  // eslint-disable-next-line
  // Add Note

  const getNotes = async () => {
    // api calls
    const response = await fetch(`${host}/api/notes/getnotes`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiYWY5NWViY2IzNjJlOWRhZGZmYTUyIn0sImlhdCI6MTY3NDA3NDQ1Nn0.YrAoCgzzH1FtRTRfXNakUDeYT9DgbZxZwYfUwGLKvAY'
      },
    });
    const json = await response.json()
    // console.log(json);
    setNotes(json)
  }

  const addNote = async (title, description, tag) => {
    // api calls
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiYWY5NWViY2IzNjJlOWRhZGZmYTUyIn0sImlhdCI6MTY3NDA3NDQ1Nn0.YrAoCgzzH1FtRTRfXNakUDeYT9DgbZxZwYfUwGLKvAY'
      },
      body: JSON.stringify({ title, description, tag }) // body data type must match "Content-Type" header
    });

    const note = await response.json()
    setNotes(notes.concat(note))
  }

  // Update Note
  const updateNote = async (id, title, description, tag) => {
    // api calls
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiYWY5NWViY2IzNjJlOWRhZGZmYTUyIn0sImlhdCI6MTY3NDA3NDQ1Nn0.YrAoCgzzH1FtRTRfXNakUDeYT9DgbZxZwYfUwGLKvAY'
      },
      body: JSON.stringify({ title, description, tag }) // body data type must match "Content-Type" header
    });
    const json = response.json()
    // console.log(json)

    // Update Frontend
    getNotes();

    // let newNotes = JSON.parse(JSON.stringify(notes))

    // for (let i = 0; i < newNotes.length; i++) {
    //   const element = newNotes[i]
    //   if (element._id === id) {
    //     newNotes[i].title = title
    //     newNotes[i].description = description
    //     newNotes[i].tag = tag
    //     break;
    //   }
    // }
    // console.log(id, notes)
    // setNotes(newNotes)
  }
  // Delete Note
  const deleteNote = async (id) => {
    // Api Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiYWY5NWViY2IzNjJlOWRhZGZmYTUyIn0sImlhdCI6MTY3NDA3NDQ1Nn0.YrAoCgzzH1FtRTRfXNakUDeYT9DgbZxZwYfUwGLKvAY'
      },
    });
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }
  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, updateNote, deleteNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState