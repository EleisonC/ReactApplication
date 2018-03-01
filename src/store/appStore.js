import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/collectReducers'
import { composeWithDevTools } from 'redux-devtools-extension';

export default function Appstore (initialState){
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    );
}