import { combineReducers } from 'redux';
import auth from './authenticarionReducers';
import categories from './reducers';
import recipes from './recipeReducers'
const rootReducer = combineReducers({
    auth,
    categories,
    recipes
});

export default rootReducer;