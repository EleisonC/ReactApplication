import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/collectReducers'

export default function Appstore (initialState){
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}