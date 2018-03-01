import { ADD_CATEGORY } from './actionTypes';
import { VIEW_CATEGORIES } from './actionTypes'
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
export const ViewCategory = () => {
    const headers = { Authorization: `Bearer ${localStorage.getItem("accessToken")}`};
    return function (dispatch) {
        return axios.get('http://127.0.0.1:5000/category_view/', {headers})
        .then(response => dispatch(viewCategory(response.data)))}
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
