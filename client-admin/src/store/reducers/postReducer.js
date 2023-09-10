import { POSTS_FETCH_SUCCESS, POST_FETCH_SUCCESS } from "../actionTypes"

const initalState = { posts: [], post: {} }


function postReducer(state = initalState, action) {
    switch (action.type) {
        case POSTS_FETCH_SUCCESS:
            return { ...state, posts: action.payload }
        case POST_FETCH_SUCCESS:
            return { ...state, post: action.payload }
        default:
            return state
    }
}

export default postReducer