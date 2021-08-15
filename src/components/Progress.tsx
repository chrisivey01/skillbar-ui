import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { raiseProgress } from "../redux/skillbar.actions";
import { ProgressBar } from "./styles";

const Progress = () => {
    const dispatch = useDispatch();
    const progress = useSelector((state: RootStateOrAny) => state.skillbar.progress);

    useEffect(() => {
        if (progress < 100) {
            setTimeout(() => {
                dispatch(raiseProgress(progress + 1))
            }, Math.floor(Math.random() * 25))
        }
    }, [progress, dispatch])

    return <ProgressBar width={progress} />
}

export default Progress;