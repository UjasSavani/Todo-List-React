import { GET_DATA, GET_PERTICULAR_DATA } from "./allActions"

export const getApiDataAction = (data) => {
    return {
        type: GET_DATA,
        payload: {
            data,
        }
    }
}

export const getPerticularDataAction = (detail) => {
    return {
        type: GET_PERTICULAR_DATA,
        payload: {
            detail
        }
    }

}