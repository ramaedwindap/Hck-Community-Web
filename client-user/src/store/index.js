import { applyMiddleware, combineReducers, createStore } from 'redux'
import postReducer from './reducers/postReducer';
import thunk from 'redux-thunk'

const rootReducers = combineReducers({
    postReducer
})

let store = createStore(rootReducers, applyMiddleware(thunk))

export default store;