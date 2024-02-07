import React from "react";
import {Link} from 'react-router-dom'
export default function Navbar(){
    return(
        <div>
        <nav>
        <Link to='/' className="nav--icon">FF</Link>
        <Link to='budget'className="nav--items"> Budget</Link>
        <Link to='projects' className="nav--items">Projects</Link>
        <Link to='signup' className="nav--items">Sign up</Link>
        <Link to='login' className="nav--items">Log in</Link> 
        {/* 
        
        
         */}
            {/* <h1 className="nav--icon">FF</h1>
            <h4 className="nav--items">Contact Us</h4>
            <h4 className="nav--items">Log in/Sign Up</h4> */}
        </nav>
        </div>
    )
}