import { DodamShape } from "@b1nd/dds-web";
import styled, { css } from "styled-components";

export const WeeklyTopContainer = styled.div`
  width: 100%;
  height: 45vh;

  display: flex;
  justify-content: center;
  column-gap: 10px;

  @media (max-width: 1268px) {
    flex-wrap: wrap; 
    gap: 20px;
    flex-direction: column;
    align-items: center;
    height: auto;
  }

`;


export const WeeklyTopItemBox = styled.div<{ rank: number }>`
  width: ${({ rank }) => (rank === 1 ? "250px" : "240px")};
  height: 282px;
  background-color: ${({ theme }) => theme.fillNormal};

  margin-top: ${({ rank }) => (rank===1 ? null : "50px")};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;

  ${DodamShape.ExtraLarge};

  span {
    color: ${({ theme }) => theme.labelNormal};
  }

  @media (max-width: 1268px) {
    margin-top: 0;
    flex-direction: row;
    height: 80px;


    ${({ rank }) =>
      rank === 1
        ? css`
      width: 100%; 
      display: flex;
      justify-content: center;
      order: -1; /* 1등을 가장 위로 */
    `
        : css`
      width: 100%; /* 2등과 3등을 나란히 정렬 */
    `}
  }
`;


export const WeeklyItemTopWrap = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  column-gap: 10px;
`;