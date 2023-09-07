import { POSTS_FETCH_SUCCESS, POST_FETCH_SUCCESS } from "../actionTypes"

const initialState = {
    posts: [], post: {}
}

function postReducer(state = initialState, action) {
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

// ! pertanyaan = untuk store dan update apakah boleh menggunakan state yang sama?. or dengan detail karena bentuk datanya berupa objek..