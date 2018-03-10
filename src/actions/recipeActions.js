import { VIEW_RECIPES } from './actionTypes'
import { ADD_RECIPE } from './actionTypes'
import axios from 'axios';
import { notify } from 'react-notify-toast';

export const AddRecipe = (state) => {
    const headers = { Authorization: `Bearer ${localStorage.getItem("accessToken")}`};
    return function (dispatch) {
        return axios.post(`http://127.0.0.1:5000/create_recipe/${state.category_id}`, state, {headers})
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
        return axios.get(`http://127.0.0.1:5000/view_recipes/${state}/?page=${page}`, {headers})
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