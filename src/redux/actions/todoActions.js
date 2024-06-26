import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "./allActions"

export const todoAddElement = () => {
    return {
        type: ADD_TODO,
        payload:{
            id,title
        }
    }
}

export const todoRemoveElement = () => {
    return {
        type: REMOVE_TODO,
        payload:{
            id
        }
    }
}

export const todoEditElement = () => {
    return {
        type: EDIT_TODO,
        payload:{
            id,title
        }
    }
}