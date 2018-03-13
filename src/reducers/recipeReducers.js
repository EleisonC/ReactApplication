const recipes = (state = [], action) => {
    switch ( action.type ){
        case 'ADD_RECIPE':
            return state;
        case 'VIEW_RECIPES':
            return {
                ...state,
                ...action.data
            };
        case 'EDIT_RECIPE':
            return state;
        case 'DELETE_RECIPE':
            return state;
        default:
            return state;
    }
}
 
export default recipes;