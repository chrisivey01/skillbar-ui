import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNuiRequest } from "fivem-nui-react-lib";
import styled from "styled-components";
import skillBarJson from "./assets/skill-bar.json";
import Bar from "./components/Bar";
import Dial from "./components/Dial";
import Progress from "./components/Progress";
import { closeSkillbar, setDial } from "./redux/skillbar.actions";


const Container = styled.div`
  margin: 50% auto;
`

const App = () => {
  const Nui = useNuiRequest();
  const dispatch = useDispatch();
  const show = useSelector((state: any) => state.skillbar.show)
  const progress = useSelector((state: any) => state.skillbar.progress)
  const dial = useSelector((state: any) => state.skillbar.dial)

  useEffect(() => {
    dispatch(setDial(Math.floor(Math.random() * 90)))
  }, [show])


  /**
   * Progress is the bar filling up.
   * Dial is the static box.
   * 
   * On Space the @progress can be within 10 points over @dial but @progress can never be below
   * @dial but not less.
   */
  useEffect(() => {
    const keyPress = (e: KeyboardEvent) => {
      if (e.code === "Space" && progress && dial) {
        const skillCheck = progress - dial
        if (skillCheck > 0 && skillCheck <= 10) {
          console.log('Success! ' + skillCheck)
          if (process.env.NODE_ENV !== "development") {
            Nui.send("pma-skillbar:response", true)
            dispatch(closeSkillbar())
          }
        } else {
          console.log('Failure! ' + skillCheck)
          if (process.env.NODE_ENV !== "development") {
            Nui.send("pma-skillbar:response", false)
            dispatch(closeSkillbar())
          }
        }
      }
    }

    window.addEventListener('keydown', keyPress)
    return () => window.removeEventListener("keydown", keyPress);
  }, [progress, dial, Nui, dispatch])


  return (
    <Container style={{ visibility: show ? "visible" : "hidden" }}>
      <Bar>
        <Progress />
        <Dial />
      </Bar>
    </Container>
  );
}

export default App;
