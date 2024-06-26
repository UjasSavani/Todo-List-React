import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "../actions/allActions"

const initialState = {
    todoTaskList: [],
    editFlag: 0,
    editableData: {},
    currentTask: ``
}
export const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO: {
            console.log("in add todo action");
            return {
                ...state,
                todoTaskList: [...state.todoTaskList, action.payload]
            }
        }

        case REMOVE_TODO: {
            const supportTodo = state.todoTaskList.filter((value) => {
                return value.id !== action.payload.id
            })

            return {...state, todoTaskList: supportTodo}
        }

        case EDIT_TODO: {
            const supportTodo = state.todoTaskList.map((value) => {
                if(value.id === action.payload.id) return {...value, title: action.payload.title}
                else return value
            })

            return {...state, supportTodo }
        }

        default:
            return state;
    }
}