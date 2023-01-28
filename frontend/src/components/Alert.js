import React,{useContext,useState} from 'react'
import AlertContext from '../context/alert/AlertContext.js'

const Alert = () => {
    const context = useContext(AlertContext)
    // const {showAlert} = context
    return (
        <div className="alert alert-primary" role="alert">
            A simple primary alert—check it out!
        </div>
    )
}

export default Alert