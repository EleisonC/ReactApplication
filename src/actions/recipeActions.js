import { VIEW_RECIPES } from './actionTypes';
import { EDIT_RECIPE } from './actionTypes'
import { ADD_RECIPE } from './actionTypes';
import {DELETE_RECIPE} from './actionTypes';
import axios from 'axios';
import { notify } from 'react-notify-toast';
import { URL_NAME } from './Url';

export const AddRecipe = (state) => {
    const headers = { Authorization: `Bearer ${localStorage.getItem("accessToken")}`};
    return function (dispatch) {
        return axios.post(`${URL_NAME}/create_recipe/${state.category_id}`, state, {headers})
        .then((response) => {
            notify.show(response.data.message, 'success', 4000);
            dispatch(addRecipe())
        })
        .catch(
            (error) => {
                if (error.response) {
                    notify.show(error.response.data.message, 'error', 4000);
                } else if (error.request) {
                    alert("REQUEST NOT MADE")
                }
                throw(error)
            } )
       
    }
}
export const ViewRecipes = (state, page) => {
    const headers = { Authorization: `Bearer ${localStorage.getItem("accessToken")}`};
    return function (dispatch) {
        return axios.get(`${URL_NAME}/view_recipes/${state}/?page=${page}`, {headers})
        .then((response) => {
            dispatch(viewRecipes(response.data))
        })
        .catch(
            (error) => {
                if (error.response) {
                    notify.show(error.response.data.message, 'error', 4000);
                } else if (error.request) {
                    alert("REQUEST NOT MADE")
                }
                throw(error)
            })}
}
export const ViewRecipe = (category_id, recipe_id) => {
    const headers = { Authorization: `Bearer ${localStorage.getItem("accessToken")}`};
    return function (dispatch) {
        return axios.get(`${URL_NAME}/recipe_byid/${category_id}/${recipe_id}`, {headers})
        .then((response) => {
            dispatch(viewRecipes(response.data))
        })
        .catch(
            (error) => {
                if (error.response) {
                    notify.show(error.response.data.message, 'error', 4000);
                } else if (error.request) {
                    alert("REQUEST NOT MADE")
                }
                throw(error)
            })}
}
export const editRecipe = (state) => {
    const headers = { Authorization: `Bearer ${localStorage.getItem("accessToken")}`};
    return function (dispatch) {
        return axios.put(`${URL_NAME}/recipe_edit/${state.category_id}/${state.recipe_id}`, state, {headers})
        .then((response) => {
            dispatch(Editrecipe())
        })
        .catch(
            (error) => {
                if (error.response) {
                    notify.show(error.response.data.message, 'error', 4000);
                } else if (error.request) {
                    alert("REQUEST NOT MADE")
                }
                throw(error)
            } )
       
    }
}
export const deleteRecipe = (category, recipe) => {
    const headers = { Authorization: `Bearer ${localStorage.getItem("accessToken")}`};
    return function (dispatch) {
        return axios.delete(`${URL_NAME}/recipe_delete/${category}/${recipe}`,{headers})
        .then((response) => {
            notify.show(response.data.message, 'success', 4000);
            dispatch(Deleterecipe())
        })
        .catch(
            (error) => {
                if (error.response) {
                    notify.show(error.response.data.message, 'error', 4000);
                } else if (error.request) {
                    alert("REQUEST NOT MADE")
                }
                throw(error)
            } )
       
    }
}
export const searchRecipe = (state) => {
    const headers = { Authorization: `Bearer ${localStorage.getItem("accessToken")}`};
    return function (dispatch) {
        return axios.get(`${URL_NAME}/view_recipes/${state.category}/?q=${state.q}`,{headers})
        .then((response) => {
            dispatch(viewRecipes(response.data))
        })
        .catch(
            (error) => {
                if (error.response) {
                    notify.show(error.response.data.message, 'error', 4000);
                } else if (error.request) {
                    alert("REQUEST NOT MADE")
                }
                throw(error)
            } )
       
    }
}
export function Editrecipe(){
    return{
        type: EDIT_RECIPE
    };
}
export function addRecipe () {
    return{
        type: ADD_RECIPE
    };
}
export function viewRecipes(data){
    return{
        type: VIEW_RECIPES,
        data
    }
}
export function Deleterecipe(){
    return{
        type: DELETE_RECIPE
    };
}
