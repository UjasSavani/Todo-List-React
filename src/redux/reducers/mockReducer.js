import { GET_DATA, GET_PERTICULAR_DATA } from "../actions/allActions";

const initialState = {
    data: [],
    detail: {}
}
export const mockReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_DATA: {
            return {
                ...state,
                data: action.payload.data
            }
        }

        case GET_PERTICULAR_DATA: {
            console.log("in reducer", action.payload.detail);
            return {
                ...state,
                detail: action.payload.detail
            }
        }

        default:
            return state
    }
}