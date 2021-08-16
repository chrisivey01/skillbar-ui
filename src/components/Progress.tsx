import React from "react";
import {useNuiRequest} from "fivem-nui-react-lib";
import {useEffect} from "react";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {closeSkillbar, raiseProgress} from "../redux/skillbar.actions";
import {ProgressBar} from "./styles";

const Progress = () => {
    const dispatch = useDispatch();
    const progress = useSelector((state: RootStateOrAny) => state.skillbar.progress);
    const Nui = useNuiRequest();
    const show = useSelector((state: any) => state.skillbar.show)

    useEffect(() => {
        if (progress < 100 && show) {
            setTimeout(() => {
                dispatch(raiseProgress(progress + 1))
            }, Math.floor(Math.random() * 25))
        }
    }, [progress, dispatch, show])


    useEffect(() => {
        if (progress === 100 && show) {
            Nui.send("pma-skillbar:response", false)
            dispatch(closeSkillbar())
        }
    }, [progress, show, Nui, dispatch])

    return <ProgressBar width={progress}/>
}

export default Progress;