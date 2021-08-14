import { AnyAction } from "redux"

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
            };
        case "CLOSE_SKILLBAR":
            return {
                ...state,
                show: false
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