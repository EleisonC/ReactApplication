import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand">YUMMY RECIPES</a>
            <ul className="navbar-nav  mt-2 mt-lg-0" id="navbar">
                <li className="nav-item active">
                <Link to="/" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                <Link to="/login" className="nav-link" >Login</Link>
                </li>
                <li className="nav-item">
                <Link to="/signup" className="nav-link disabled" >SingUp</Link>
                </li> 
            </ul>
            </div>
        </nav>
        
    </div>);
}
 export default Navbar;