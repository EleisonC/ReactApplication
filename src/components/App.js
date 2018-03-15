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
import EditCategory from './dashboard/categories/editCategory';
import CreateRecipe from './dashboard/recipes/addRecipes';
import ViewRecipe from './dashboard/recipes/viewRecipe'
import viewRecipe from './dashboard/recipes/viewRecipe';
import EditRecipe from './dashboard/recipes/editRecipe';
import SecureRoute from './privateRoute'
class App extends Component{
    render() {
        return (
            <BrowserRouter>
            <div>
                <Navbar />
                <Notifications />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/signup' component={Registration} />
                    <Route exact path='/login' component={Login} />
                    <SecureRoute exact path='/userpage' component={ FirstDisplay } />
                    <SecureRoute exact path= '/createcategory' component={ CreateCategory }/>
                    <SecureRoute exact path= '/:name/:id/recipies' component={ ViewRecipes }/>
                    <SecureRoute exact path= '/:name/:id/editcategory' component={ EditCategory }/>
                    <SecureRoute exact path= '/:name/:id/addrecipe' component={ CreateRecipe }/>
                    <SecureRoute exact path= '/:name/:categoryId/recipe/:recipeId' component={ viewRecipe }/>
                    <SecureRoute exact path= '/category/:categoryId/recipe/:recipeId/editrecipe' component={ EditRecipe }/>
                </Switch>
            </div>
            </BrowserRouter>
        );
    }
}

export default App;