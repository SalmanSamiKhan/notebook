import React, { useContext } from 'react'
import NoteContext from '../context/note/NoteContext'

const NoteItem = (props) => {
    const context = useContext(NoteContext)
    const { deleteNote } = context
    const { note,editNote } = props
    return (
        <div className='col-md-3 my-3'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-pen-to-square" onClick={() => { editNote(note) }}></i>
                    <i className="fa-solid fa-trash-can mx-3" onClick={() => { deleteNote(note._id) ; props.showAlert('Deleted Note Successfully','success') }}></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem