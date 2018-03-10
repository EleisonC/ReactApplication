const recipes = (state = [], action) => {
    switch ( action.type ){
        case 'ADD_RECIPE':
            return state;
        case 'VIEW_RECIPES':
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}
 
export default recipes;