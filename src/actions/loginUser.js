import { LOGIN_SUCCESS } from './actionTypes';
import axios from 'axios';
import { notify } from 'react-notify-toast';

export const login = (state) => {
    return function (dispatch){
        return axios.post('http://127.0.0.1:5000/auth/login', state)
        .then( 
            (response) => {
                localStorage.setItem('accessToken', response.data.access_token)
                notify.show(response.data.message, 'success', 4000);
                state = [state]
                dispatch(loggedIn(state))
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

function loggedIn (state) {
   return {
       type: LOGIN_SUCCESS,
       payload: state
    }
}