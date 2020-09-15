import React from 'react'
import {NavLink} from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
                <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Archilogic Project</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" to="/">Floor Plan Engine</NavLink>
                            <NavLink className="nav-link" to="/Three">3D Embed</NavLink>
                            <NavLink className="nav-link" to="/Space">Space Api</NavLink>
            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
