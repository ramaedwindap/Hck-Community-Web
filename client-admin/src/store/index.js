import { createStore, combineReducers, applyMiddleware } from 'redux'
import postReducer from './reducers/postReducer'
import categoryReducer from './reducers/categoryReducer'
import thunk from 'redux-thunk'

const rootReducers = combineReducers({
    postReducer,
    categoryReducer
})

let store = createStore(rootReducers, applyMiddleware(thunk))

export default store