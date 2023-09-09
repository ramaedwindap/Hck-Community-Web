const initialState = { categories: [] }

function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case "categories/fetchSuccess":
            return { ...state, categories: action.payload }

        default:
            return state
    }
}

export default categoryReducer