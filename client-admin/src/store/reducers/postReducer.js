const initalState = { posts: [] }


function postReducer(state = initalState, action) {
    switch (action.type) {
        case 'posts/fetchSuccess':
            return { ...state, posts: action.payload }
        // case 'counter/decremented':
        //     return { value: state.value - 1 }
        default:
            return state
    }
}

export default postReducer