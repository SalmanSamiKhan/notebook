import React from 'react'
import { BrowserRouter as Router, Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    let location = useLocation();
    let path = location.pathname;
    const navigate = useNavigate()
    const handleSignout = ()=>{
        localStorage.removeItem('token')
        navigate('/signin')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Notebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${path === '/' ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${path === '/about' ? "active" : ""}`} to="/about">About</Link>
                            </li>
                        </ul>
                        { !localStorage.getItem('token')?
                        <div className="d-flex">
                            <Link className="btn btn-primary mx-1" to={'/signup'} role='button'>Signup</Link>
                            <Link className="btn btn-primary mx-1" to={'/signin'} role='button'>Signin</Link>
                        </div>
                        :
                        <div className="d-flex">
                            <button className="btn btn-primary mx-1" onClick={handleSignout} >Signout</button>
                        </div>
                        }
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar