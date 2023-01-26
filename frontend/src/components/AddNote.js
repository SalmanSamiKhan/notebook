import React, { useContext, useState } from 'react'
import NoteContext from '../context/note/NoteContext'

const AddNote = () => {
    const context = useContext(NoteContext)
    const {addNote} = context
    const [note, setNote] = useState({title:"", description:"", tag:""})

    const handleSubmit = (e)=>{
        e.preventDefault()
        // add new note to main note array in noteState
        addNote(note.title, note.description, note.tag)
        setNote({title:"", description:"", tag:""})
    }

    const onChange = (e)=>{
        setNote({...note, 
            [e.target.name]:e.target.value // name = title/description
        })
    }
    
    return (
        <div>
            <h1>Add a note</h1>
            <div className="form my-3">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name='title' aria-describedby="title" value={note.title} required minLength={3} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name='description' aria-describedby="edescription"  value={note.description}  required minLength={5} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name='tag' aria-describedby="tag" value={note.tag} onChange={onChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" >Add Note</button>
                </form>
            </div>
            <h1>See your notes</h1>
        </div>
    )
}

export default AddNote