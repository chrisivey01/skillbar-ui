import { useSelector } from "react-redux";
import { SkillProgress } from "./styles";

const Dial = () => {
    const dial = useSelector((state: any) => state.skillbar.dial)
    return <SkillProgress left={dial} />
}

export default Dial;