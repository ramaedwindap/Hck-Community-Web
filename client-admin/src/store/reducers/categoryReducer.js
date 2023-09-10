const initialState = { categories: [], category: {} }

function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case "categories/fetchSuccess":
            return { ...state, categories: action.payload }
        case "category/fetchSuccess":
            return { ...state, category: action.payload }

        default:
            return state
    }
}

export default categoryReducer