import { SIGN_UP_SUCCESS } from './actionTypes';
import axios from 'axios';
import {notify} from 'react-notify-toast';

export const signup = (state) => {
    return function (dispatch){
        return axios.post('http://127.0.0.1:5000/auth/register', state)
        .then((response) => {
            notify.show(response.data.message, 'success', 4000);
            dispatch(registerUser(state));
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
function registerUser(state){
    debugger;
    return{
        type: SIGN_UP_SUCCESS,
        payload: state
    };
}


// export default (signup);