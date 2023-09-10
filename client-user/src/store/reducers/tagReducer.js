import { TOP_TAGS_FETCH_SUCCESS } from "../actionTypes"

const initialState = { topTags: [] }

function tagReducer(state = initialState, action) {
    switch (action.type) {
        case TOP_TAGS_FETCH_SUCCESS:
            return { ...state, topTags: action.payload }
        default:
            return state
    }
}

export default tagReducer