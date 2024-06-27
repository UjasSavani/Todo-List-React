import { ADD_TODO, CURRENT_TASK, EDIT_TODO, REMOVE_TODO, TODO_FLAG } from "../actions/allActions"

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
            console.log("in edit todo reducer ", action.payload.title);
            const supportTodo = state.todoTaskList.map((value) => {
                if(value.id === action.payload.id) return {...value, title: action.payload.title}
                else return value
            })

            return {todoTaskList: supportTodo, editFlag: 0, currentTask: ``, editableData: {} }
        }

        case TODO_FLAG: {
            return {
                ...state,
                editFlag: action.payload.flag,
                editableData: action.payload.todo
            }
        }

        case CURRENT_TASK: {
            return {
                ...state,
                currentTask: action.payload.task
            }
        }
        default:
            return state;
    }
}