import { ADD_TODO, CURRENT_TASK, EDIT_TODO, REMOVE_TODO, TODO_FLAG } from "./allActions"

export const todoAddElement = (id, title) => {
    return {
        type: ADD_TODO,
        payload:{
            id,title
        }
    }
}

export const todoRemoveElement = (id) => {
    return {
        type: REMOVE_TODO,
        payload:{
            id
        }
    }
}

export const todoEditElement = (id, title) => {
    return {
        type: EDIT_TODO,
        payload:{
            id,title
        }
    }
}

export const todoFlagElement = (flag, todo) => {
    return {
        type: TODO_FLAG,
        payload: {
            flag,
            todo
        }
    }
}

export const todoCurrentTaskElement = (task) => {
    return {
        type: CURRENT_TASK,
        payload: {
            task
        }
    }
}