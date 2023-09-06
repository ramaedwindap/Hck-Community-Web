import { combineReducers, createStore } from 'redux'
import postReducer from './reducers/postReducer';

const rootReducers = combineReducers({
    postReducer
})

let store = createStore(rootReducers)

export default store;