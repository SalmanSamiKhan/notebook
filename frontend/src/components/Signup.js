import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const host = 'http://localhost:5000'
    const [info,setInfo] = useState({name:'',email:'',password:''})
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`${host}/api/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name:info.name, email: info.email, password:info.password })
        });
        const json = await response.json()
        // console.log(json)
        if(json.success){
            // save the auth token and redirect
            localStorage.setItem('token',json.authtoken)
            navigate('/')
        }else{
            alert('Invalid Name, Email or Password!')
        }
    }
    const onChange = (e) => {
        setInfo({
          ...info,
          [e.target.name]: e.target.value // name = email, password
        })
      }
    return (
        <div className='m-5'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" id="name" value={info.name} required minLength={3} onChange={onChange}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" id="email" value={info.email} required onChange={onChange}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="password" value={info.password} required minLength={4} onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
        </div>
    )
}

export default Signup