import React, {Component}from 'react';
import {Link} from 'react-router-dom';
import { __esModule } from 'react-router-dom/Redirect';

const isLoggedIn = localStorage.getItem('accessToken')
class Navbar extends Component{
    render(){    
        return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand">YUMMY RECIPES</a>
            <ul className="navbar-nav  mt-2 mt-lg-0" id="navbar">
                {!isLoggedIn?
                <div id="nav">
                <li className="nav-item active">
                <Link to="/" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link" >Login</Link>
                </li>
                    <li className="nav-item">
                <Link to="/signup" className="nav-link disabled" >SignUp</Link>
                </li>
                </div>
                :
                <div>
                <li className="nav-item active">
                    <Link to="/userpage" className="nav-link" >Dashboard<span className="sr-only">(current)</span></Link>
                </li>
                </div>}
            </ul>
            </div>
        </nav>
        
    </div>);
    }
}
 export default Navbar;