import {AnyAction} from "redux"

const initialState = {
    show: false,
    progress: 0,
    dial: 0
}

export const skillbarReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case "SHOW_SKILLBAR":
            return {
                ...state,
                show: true,
                progress: 0,
            };
        case "CLOSE_SKILLBAR":
            return {
                ...state,
                show: false,
                progress: 0,
                dial: 0
            }
        case "RAISE_PROGRESS":
            return {
                ...state,
                progress: action.payload
            }
        case "SET_DIAL":
            return {
                ...state,
                dial: action.payload
            }
        default:
            return state;
    }
}