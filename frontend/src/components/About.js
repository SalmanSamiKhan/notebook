import React,{useContext, useEffect} from 'react'
import NoteContext from '../context/note/NoteContext'

const About = () => {
  // useContext -> NoteContext -> CreateContext using NoteState and returning the state
  const a = useContext(NoteContext)
  // useEffect hook. update function is called on a
  useEffect(() => {
    a.update()
    // eslint-disable-next-line
  }, [])
  
  return (
    <div>
    <h1>This is iNotebook About {a.state.name} and he is in class {a.state.class} </h1>
    
    </div>
  )
}

export default About