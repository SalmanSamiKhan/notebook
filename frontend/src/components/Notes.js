import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../context/note/NoteContext'
import NoteItem from './NoteItem.js'
import AddNote from './AddNote'

const Notes = () => {
  const context = useContext(NoteContext)
  const { notes, getNotes, updateNote } = context
  const [note, setNote] = useState({ id: '', etitle: "", edescription: "", etag: "" })
  const ref = useRef(null)
  const refClose = useRef(null)

  useEffect(() => {
    getNotes()
    // eslint-disable-next-line
  }, [])

  const editNote = (currentNote) => {
    // console.log('Edit request received',currentNote._id)
    ref.current.click()
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })

  }

  const handleClick = (e) => {
    // console.log('updating note...', note)
    updateNote(note.id, note.etitle, note.edescription, note.etag)
    refClose.current.click()
  }

  const onChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value // name = title/description
    })
  }
  return (
    <>
      <AddNote />

      {/* <!-- Button trigger modal --> */}
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name='etitle' aria-describedby="etitle" minLength={3} value={note.etitle} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">Description</label>
                  <textarea type="text" className="form-control" id="edescription" name='edescription' minLength={5} aria-describedby="edescription" rows={5} value={note.edescription} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name='etag' aria-describedby="etag" value={note.etag} onChange={onChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
            </div>
          </div>
        </div>
      </div>

      <div className='row my-3'>
        {notes.map((note) => {
          return <NoteItem key={note._id} editNote={editNote} note={note} />
        })}
      </div>
    </>
  )
}

export default Notes