import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { notify } from 'react-notify-toast';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authentication from '../actions/loginUser';


class Navbar extends Component {
    handleLogout = () => {
      this.props.action.logout()
        .then(() => {
          window.localStorage.clear();
          window.location.reload();
        },

        );
    }
    handleDash = () => {
      window.location.reload();
    }
    render() {
      const isLoggedIn = localStorage.getItem('accessToken');
      return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand">YUMMY RECIPES</a>
              <ul className="navbar-nav  mt-2 mt-lg-0" id="navbar">
                {!isLoggedIn ?
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
                    <div id="nav">
                      <li onClick={this.handleDash}className="nav-item active">
                        <Link id="dash" to="/userpage" className="nav-link" >Dashboard<span className="sr-only">(current)</span></Link>
                      </li>
                      <li onClick={this.handleLogout} className="nav-item active">
                        <Link to="/login" className="nav-link" >Logout<span className="sr-only">(current)</span></Link>
                      </li>
                    </div>
                  </div>}
              </ul>
            </div>
          </nav>

        </div>);
    }
}
function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(authentication, dispatch),
  };
}
export default connect(null, mapDispatchToProps)(Navbar);
