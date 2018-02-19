import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Notifications from 'react-notify-toast';
import HomePage from './home/homePage.js';
import Registration from './authentication/authentication.js';
import Navbar from './nav';
import Login from './authentication/Login';


class App extends Component{
    render() {
        return (
            <BrowserRouter>
            <div>
                <Navbar />
                <Notifications />
                <Switch>
                    <Route  exact path='/' component={HomePage} />
                    <Route  exact path='/signup' component={Registration} />
                    <Route exact path='/login' component={Login} />

                </Switch>
            </div>
            </BrowserRouter>
        );
    }
}

export default App;