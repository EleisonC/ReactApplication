import { combineReducers } from 'redux';
import auth from './authenticarionReducers';
import categories from './reducers';

const rootReducer = combineReducers({
    auth,
    categories
});

export default rootReducer;