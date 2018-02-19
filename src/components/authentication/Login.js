import React from 'react';
import axios from 'axios';
import {notify} from 'react-notify-toast';


class Login extends React.Component{
    state = {
        username: '',
        password: ''
    }
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});

    }
    handleLogin (event) {
        const {username, password} = this.state;
        event.preventDefault();
    }


    render() {
        const {username, password} = this.state
        return (
        <div className="card mt-5" id="Login">
                <h4 className="card-header text-center">Please Log In</h4>
            <div className="card-body">
                <form onSubmit={this.handleLogin}>
                    <div className="m-5">
                        <div className="form-group ">
                            <label>USERNAME</label>      
                            <input type="text" name = "username" placeholder="username" className="form-control"
                            onChange={this.handleChange} value={username}
                            />   
                        </div>
                        <div className="form-group">
                                <label>PASSWORD</label>      
                                <input type="password" name = "password" placeholder="password" className="form-control"
                                onChange={this.handleChange} value={password}
                                />   
                            
                        </div>
                        <button  type="submit" className="btn btn-success">LOGIN</button>
                    </div>
                </form>      
            </div>
        </div>

        );
    }
}

export default Login;