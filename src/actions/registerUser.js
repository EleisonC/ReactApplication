import { SIGN_UP_SUCCESS } from './actionTypes';
import axios from 'axios';
import {notify} from 'react-notify-toast';

export const signup = (state) => {
    return function (dispatch){
        return axios.post('http://127.0.0.1:5000/auth/register', state)
        .then((response) => {
            notify.show(response.data.message, 'success', 4000);
            this.props.history.push('/login');
            console.log(response);
        })
        .catch(error => {
            console.log(error)
            if (error.response) {
                alert(error.response.data.message)
            } else if (error.request) {
                alert("REQUEST NOT MADE")
            }
        })
        dispatch(registerUser(state));
    
}
}
function registerUser(state){
    return{
        type: SIGN_UP_SUCCESS,
        payload: state
    };
}


// export default (signup);