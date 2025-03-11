import { DodamShape } from "@b1nd/dds-web";
import styled from "styled-components";

export const WeeklyTopContainer = styled.div`
  width: 100%;
  height: 45vh;

  display: flex;
  justify-content: center;
  column-gap: 20px;
  color: white;
`;

export const WeeklyTopItemBox = styled.div<{ rank: boolean }>`
  width: ${({ rank }) => (rank ? "400px" : "270px")};
  height: 282px;
  background-color: ${({theme})=>theme.fillNormal};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  row-gap: 10px;

  margin-top: ${({ rank }) => (rank ? null : "50px")};

  ${DodamShape.ExtraLarge};
  span{
    color: ${({theme})=>theme.labelNormal};
  }
`;


export const WeeklyItemTopWrap = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  column-gap: 10px;
`;