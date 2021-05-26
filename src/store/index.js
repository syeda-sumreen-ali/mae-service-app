import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {authReducer, toastReducer} from './reducers'


export default createStore(combineReducers({
    auth:authReducer,
    toast: toastReducer
}),{},applyMiddleware[thunk])