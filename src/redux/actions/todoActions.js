import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "./allActions"

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