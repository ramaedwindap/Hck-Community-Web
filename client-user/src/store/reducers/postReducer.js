const initialState = {
    posts: [], post: {}
}

function postReducer(state = initialState, action) {
    switch (action.type) {
        case 'posts/fetchSuccess':
            return { ...state, posts: action.payload }
        case 'post/fetchSuccess':
            return { post: action.payload }
        default:
            return state
    }
}

export default postReducer

// ! pertanyaan = untuk store dan update apakah boleh menggunakan state yang sama dengan detail karena bentuk datanya berupa objek..