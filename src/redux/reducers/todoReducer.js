import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "../actions/allActions"

const initialState = []
export const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO: {
            return [...state, action.payload]
        }

        case REMOVE_TODO: {
            const supportTodo = state.filter((value) => {
                return value.id !== action.payload.id
            })

            return supportTodo
        }

        case EDIT_TODO: {
            const supportTodo = state.map((value) => {
                if(value.id === action.payload.id) return {...value, title: action.payload.title}
                else return value
            })

            return supportTodo
        }
    }
}