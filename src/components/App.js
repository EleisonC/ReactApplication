import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Notifications from 'react-notify-toast';
import HomePage from './home/homePage.js';
import Registration from './authentication/authentication.js';
import Navbar from './nav';
import Login from './authentication/Login';
import FirstDisplay from './dashboard/display';
import CreateCategory from './dashboard/categories/createCategory';
import ViewRecipes from './dashboard/recipes/viewRecipes';


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
                    <Route exact path='/userpage' component={ FirstDisplay } />
                    <Route exact path= '/createcategory' component={ CreateCategory }/>
                    <Route exact path= '/:name/:id/recipies' component={ ViewRecipes }/>
                </Switch>
            </div>
            </BrowserRouter>
        );
    }
}

export default App;