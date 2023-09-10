const initalState = { posts: [], post: {} }


function postReducer(state = initalState, action) {
    switch (action.type) {
        case 'posts/fetchSuccess':
            return { ...state, posts: action.payload }
        case 'post/fetchSuccess':
            return { ...state, post: action.payload }
        default:
            return state
    }
}

export default postReducer