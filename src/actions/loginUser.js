import { LOGIN_SUCCESS } from './actionTypes';
import axios from 'axios';
import { notify } from 'react-notify-toast';
import { URL_NAME } from './Url';

export const login = (state) => {
    return function (dispatch){
        return axios.post(`${URL_NAME}/auth/login`, state)
        .then( 
            (response) => {
                localStorage.setItem('accessToken', response.data.access_token)
                notify.show(response.data.message, 'success', 4000);
                dispatch(loggedIn())
        })
        .catch(
            (error) => {
                if (error.response)  {
                    notify.show(error.response.data.message, 'error', 4000);
                } else if (error.request) {
                    alert("REQUEST NOT MADE")
                }
                throw(error)
            }
    )};      
}


export const logout = () => {
    const headers = { Authorization: `Bearer ${localStorage.getItem("accessToken")}`};
    return function (dispatch){
        return axios.post(`${URL_NAME}/auth/logout`, {headers})
        .then( 
            (response) => {
                notify.show(response.data.message, 'success', 4000);
        })
        .catch(
            (error) => {
                if (error.response)  {
                    notify.show(error.response.data.message, 'error', 4000);
                } else if (error.request) {
                    alert("REQUEST NOT MADE")
                }
                throw(error)
            }
    )};      
}

function loggedIn () {
   return {
       type: LOGIN_SUCCESS
    };
}