import React, { useEffect } from 'react'
import { Link, useLocation } from "react-router-dom"

function Navbar(){

    let location = useLocation();//Used to get the location of current page and higlight that link in navbar
    useEffect(() => {
      }, [location]);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className={`nav-link ${location.pathname === "/"? "active": ""}`} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about"? "active": ""}`} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/signin"? "active": ""}`} to="/signin">SIGN IN</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/signup"? "active": ""}`} to="/signup">SIGN UP</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
