import { SIGN_UP_SUCCESS } from './actionTypes';
import axios from 'axios';
import {notify} from 'react-notify-toast';
import { URL_NAME } from './Url';

export const signup = (state) => {
    return function (dispatch){
        return axios.post(`${URL_NAME}/auth/register`, state)
        .then((response) => {
            notify.show(response.data.message, 'success', 4000);
            dispatch(registerUser());
        })
        .catch(error => {
            if (error.response) {
                notify.show(error.response.data.message, 'error', 4000);
            } else if (error.request) {
                alert("REQUEST NOT MADE")
            }
            throw(error)
        })
}
}
function registerUser(){
    return{
        type: SIGN_UP_SUCCESS,
    };
}


// export default (signup);