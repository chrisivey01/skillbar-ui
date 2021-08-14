import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import skillBarJson from "./assets/skill-bar.json";
import Bar from "./components/Bar";
import Dial from "./components/Dial";
import Progress from "./components/Progress";
import { setDial } from "./redux/skillbar.actions";


const Container = styled.div`
  margin: 50% auto;
`

const App = () => {
  const dispatch = useDispatch();
  const show = useSelector((state: any) => state.skillbar.show)
  const progress = useSelector((state: any) => state.skillbar.progress)
  const dial = useSelector((state: any) => state.skillbar.dial)

  useEffect(() => {
    window.postMessage(skillBarJson, "*")
  }, [])

  useEffect(() => {
    dispatch(setDial(Math.floor(Math.random() * 90)))
  }, [])


  /**
   * Progress is the bar filling up.
   * Dial is the static box.
   * 
   * On Space the @progress can be within 10 points over @dial but @progress can never be below
   * @dial but not less.
   */
  useEffect(() => {
    const keyPress = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        console.log('progress ' + progress)
        console.log('skill ' + dial)
      }
    }

    window.addEventListener('keypress', keyPress)
    return () => window.removeEventListener("keypress", keyPress);
  }, [progress, dial])


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
