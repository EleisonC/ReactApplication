import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authentication from '../../actions/loginUser';


class Login extends React.Component {
    // this state is local state for the commponent
    state = {
      username: '',
      password: '',
    }
    // handle input of data as one inputs so as to update local state
    handleChange = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      this.setState({ [name]: value });
    }
    // handle the login when submit is clicked
    handleLogin = (event) => {
      event.preventDefault();
      const { username, password } = this.state;
      this.props.actions.login(this.state).then(() => {
        this.props.history.push('/user-page');
        window.location.reload();
      },

      );
    }


    render() {
      const { username, password } = this.state;
      return (
        <div id="background">
          <div className="card mt-5" id="Login">
            <h4 className="card-header text-center">Please Log In</h4>
            <div className="card-body">
              <form onSubmit={this.handleLogin}>
                <div className="m-5">
                  <div className="form-group ">
                    <label>USERNAME</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      className="form-control"
                      onChange={this.handleChange}
                      value={username}
                    />
                  </div>
                  <div className="form-group">
                    <label>PASSWORD</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="form-control"
                      onChange={this.handleChange}
                      value={password}
                    />

                  </div>
                  <button type="submit" className="btn btn-success">LOGIN</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      );
    }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authentication, dispatch),
  };
}
export default connect(null, mapDispatchToProps)(Login);
