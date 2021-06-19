import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {authReducer, toastReducer} from './reducers'


const store = createStore(combineReducers({
    auth:authReducer,
    toast: toastReducer
}),{},applyMiddleware(thunk))

export default store