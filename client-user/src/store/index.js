import { applyMiddleware, combineReducers, createStore } from 'redux'
import postReducer from './reducers/postReducer';
import tagReducer from './reducers/tagReducer';
import thunk from 'redux-thunk'

const rootReducers = combineReducers({
    postReducer,
    tagReducer
})

let store = createStore(rootReducers, applyMiddleware(thunk))

export default store;