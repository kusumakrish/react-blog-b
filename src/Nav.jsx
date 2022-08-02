import "./css.css"
import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
    return(
        <div>
        <p className="the">The</p>
        <span className="siren">Siren</span><br /><br />
        <nav>
            <b><Link to="/" className="home">Home</Link>
            <Link to="/tourism" className="Tourism">Tourism</Link>
            <Link to="/fitness" className="Tourism">Fitness</Link>
            <Link to="/technology" className="Tourism">Technology</Link>
            <Link to="/bollywood" className="Tourism">Bollywood</Link>
            <Link to="/food" className="Tourism">Food</Link></b>   
        </nav> <br/><br />
        <hr className="hr"></hr>    
        </div>
    )
}

export default Nav;