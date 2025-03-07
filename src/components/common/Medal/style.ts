import styled from "styled-components";
import { MedalColor } from "./types";

export const Container = styled.div<{ rank: number }>`
  width: 50px;
  height: 50px;
  position: relative;
  background-color: transparent;
  clip-path: polygon(50% 0, 95% 25%, 95% 76%, 50% 100%, 5% 75%, 5% 25%);
  
  &::before {
    content: "";
    position: absolute;
    top: -6px;
    left: -6px;
    width: calc(100% + 12px);
    height: calc(100% + 12px);
    clip-path: inherit;
    background-color: ${({ rank }) => MedalColor[rank]};
    z-index: -1;
  }
`;


export const Wrap = styled.div`

  clip-path: polygon(50% 0, 95% 25%, 95% 76%, 50% 100%, 5% 75%, 5% 25%);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  z-index: 2;
`;
