import styled from "styled-components";
import { MedalColor } from "./types";

export const Container = styled.div<{ rank: number }>`
  width: 50px;
  height: 50px;
  clip-path: polygon(50% 0, 95% 25%, 95% 76%, 50% 100%, 5% 75%, 5% 25%);
  background-color: ${({ rank }) => MedalColor[rank]};
  position: relative;
`;

export const Wrap = styled.div`
  width: 42px;
  height: 42px;
  clip-path: polygon(50% 0, 95% 25%, 95% 76%, 50% 100%, 5% 75%, 5% 25%);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #2d2d2d;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  z-index: 2;
`;
