import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/note/NoteContext'
import NoteItem from './NoteItem.js'
import AddNote from './AddNote'

const Notes = () => {
    const context = useContext(NoteContext)
    const {notes,getNotes} = context
    useEffect(() => {
      getNotes()
    }, [])
    
    return (
        <>
        <AddNote/>
        <div className='row my-3'>
            {notes.map((note)=>{
          return <NoteItem key={note._id} note={note}/>
        })}
        </div>
        </>
    )
}

export default Notes