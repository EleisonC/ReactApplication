import { combineReducers } from 'redux';
import auth from './authenticarionReducers';

const rootReducer = combineReducers({
    auth
});

export default rootReducer;