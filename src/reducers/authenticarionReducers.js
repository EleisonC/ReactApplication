export const authentication = (state = [], action) =>{
    switch (action.type){
        case 'SIGN_UP_SUCCESS':
            return state
        case 'LOGIN_SUCCESS':
            return state

        default:
            return state;
    }
};

export default authentication;