import { ADD_CATEGORY } from './actionTypes';
import { VIEW_CATEGORIES } from './actionTypes';
import {EDIT_CATEGORIES} from './actionTypes';
import { DELETE_CATEGORY } from './actionTypes';
import axios from 'axios';
import { notify } from 'react-notify-toast';

export const AddCategory = (state) => {
    const headers = { Authorization: `Bearer ${localStorage.getItem("accessToken")}`};
    return function (dispatch){
        return axios.post("http://127.0.0.1:5000/category_creation/", state, {headers})
        .then(
            (response) => {
                notify.show(response.data.message, 'success', 4000);
                dispatch(addCategory())
            }
        )
        .catch(
            (error) => {
                if (error.response) {
                    notify.show(error.response.data.message, 'error', 4000);
                } else if (error.request) {
                    alert("REQUEST NOT MADE")
                }
                throw(error)
            }
        )
}
}
export const ViewCategory = (state) => {
    const headers = { Authorization: `Bearer ${localStorage.getItem("accessToken")}`};
    return function (dispatch) {
        return axios.get(`http://127.0.0.1:5000/category_view/?page=${state}`, {headers})
        .then((response) =>{
            dispatch(viewCategory(response.data))
        })
        .catch(
            (error) => {
                if (error.response) {
                    notify.show(error.response.data.message, 'error', 4000);
                } else if (error.request) {
                    alert("REQUEST NOT MADE")
                }
                throw(error)
            }
        )
    }

}
export const editCat = (state) => {
    const headers = { Authorization: `Bearer ${localStorage.getItem("accessToken")}`};
    return function (dispatch) {
        return axios.put(`http://127.0.0.1:5000/category_edit/${state.category_id}`, state, {headers})
        .then((response) => {notify.show(response.data.message, 'success', 4000);
                            dispatch(editCategory())})
        .catch(
            (error) => {
                if (error.response){
                    notify.show(error.response.data.message, 'error', 4000);
                }else if (error.request) {
                    alert("REQUEST NOT MADE")
                }
                throw(error)
            })}
}
export const deleteCat = (state) => {
    const headers = { Authorization: `Bearer ${localStorage.getItem("accessToken")}`};
    return function (dispatch) {
        return axios.delete(`http://127.0.0.1:5000/category_delete/${state}`,{headers})
        .then((response) => {notify.show(response.data.message, 'success', 4000);
                            dispatch(deleteCategory())})
        .catch(
            (error) => {
                if (error.response){
                    notify.show(error.response.data.message, 'error', 4000);
                }else if (error.request) {
                    alert("REQUEST NOT MADE")
                }
                throw(error)
            })}
} 
export function viewCategory(data){
    return {
        type: VIEW_CATEGORIES,
        data
    };
}
export function addCategory() {
    return {
        type: ADD_CATEGORY 
    };
}
export function editCategory(){
    return{
        type: EDIT_CATEGORIES
    };
}
export function deleteCategory(){
    return {
        type: DELETE_CATEGORY
    };
}