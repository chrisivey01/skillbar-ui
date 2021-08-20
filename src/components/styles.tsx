import styled from "styled-components";


export const BarContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
  margin-right: auto;
  width: 15%;
  height: 3%;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  border: 2px solid #E6E6E5;
`

export const ProgressBar = styled.div<{ width: any }>`
  height: 100%;
  overflow: hidden;
  position: relative;
  left: 0;
  position: absolute;
  top: 0;
  width: ${props => props.width}%;
  background: red;
  z-index: 98;
`

export const SkillProgress = styled.div<{ left: number }>`
  position: absolute;
  width: 10%;
  height: 100%;
  border-right: 2px solid rgba(255, 250, 250, 0.9);
  border-left: 2px solid rgba(255, 250, 250, 0.9);
  background-color: rgba(255, 250, 250, 0.4);
  left: ${props => props.left}%;
  z-index: 99;
  opacity: 0.8;
  padding-top: 1%;
`