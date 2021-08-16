import {Dispatch} from "react";


export const showSkillbar = () => {
    return (dispatch: Dispatch<any>) => {
        dispatch({
            type: "SHOW_SKILLBAR",
        })
    }
}

export const closeSkillbar = () => {
    return (dispatch: Dispatch<any>) => {
        dispatch({
            type: "CLOSE_SKILLBAR",
        })
    }
}

export const raiseProgress = (newValue: number) => {
    return (dispatch: Dispatch<any>) => {
        dispatch({
            type: "RAISE_PROGRESS",
            payload: newValue
        })
    }
}

export const setDial = (newValue: number) => {
    return (dispatch: Dispatch<any>) => {
        dispatch({
            type: "SET_DIAL",
            payload: newValue
        })
    }
}