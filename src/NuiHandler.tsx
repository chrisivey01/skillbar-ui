  
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showSkillbar } from "./redux/skillbar.actions";

const NuiHandler = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener("message", eventListener);
        return () => {
            return window.removeEventListener("message", eventListener);
        };
    }, []);

    const eventListener = (event: any) => {
        const data = event.data;
        switch (event.data.type) {
            case "SHOW_SKILLBAR":
                dispatch(showSkillbar());
                break;
            case "CLOSE_SKILLBAR":
                break;
            default:
        }
    };

    return <></>;
};

export default NuiHandler;