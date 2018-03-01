const authentication = (state = [], action) =>{
    switch (action.type){
        case 'SIGN_UP_SUCCESS':
        debugger;
            return [...state,
             Object.assign({}, action.payload)];
        case 'LOGIN_SUCCESS':
            return [...state,
                Object.assign({}, action.payload)
            ];
        default:
            return state;
    }
};

export default authentication;