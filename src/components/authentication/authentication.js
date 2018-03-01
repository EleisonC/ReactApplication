import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authentication from '../../actions/registerUser';

class Registraton extends React.Component{
    state = {
        email: '',
        username: '',
        password:  ''
    }
    handleInput = (event) => {
        event.preventDefault()
        const {name, value} = event.target;
        this.setState({[name]: value});
        console.log(this.props.actions)
    }
    handleSignup = (e) => {
        e.preventDefault()
        const {email, username, password} = this.state;
        this.props.actions.signup(this.state).then(
            () => {this.props.history.push('/login')}
        )
    }
    render(){
        const {email, username, password} = this.state;
        return (
            <div className="card mt-5" id="signup">
            <h4 className="card-header text-center">Please Sign</h4>
            <div className="card-body">
                
                    <form onSubmit={this.handleSignup}>
                        <div className="m-5">
                            <div className="form-group ">
                                    <label>E-MAIL</label>      
                                    <input type="email" name = "email" placeholder="jak@gmail.com" className="form-control"
                                    onChange={this.handleInput} value={email} 
                                    />   
                            </div>
                            <div className="form-group">
                                <label>USERNAME</label>      
                                <input type="text" name = "username" placeholder="username" className="form-control"
                                onChange={this.handleInput} value={username} 
                                />
                            </div>
                            <div className="form-group">
                                    <label>PASSWORD</label>
                                    <input type="password" name = "password" placeholder="password" className="form-control"
                                    onChange={this.handleInput} value={password} 
                                    />

                            </div>
                            <button  type="submit" className="btn btn-success ">CREATE</button>
                        </div>
                    </form>

            </div>
        </div>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return {
        actions : bindActionCreators(authentication, dispatch)
    };
}
export default connect(null, mapDispatchToProps)(Registraton);