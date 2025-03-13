import styled from "styled-components";
import { MedalColor } from "./types";
import { DodamTypography } from "@b1nd/dds-web";

export const Container = styled.div`
  position: relative;
  background-color: transparent;
`;


export const Wrap = styled.div`
  top: 23%;
  left: 37%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  ${DodamTypography.Headline.Bold};
  z-index: 2;
  color: ${({theme})=>theme.labelNormal};
`;
