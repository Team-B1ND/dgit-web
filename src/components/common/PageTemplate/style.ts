import styled from "styled-components";
import { April_Fools_Day_Theme } from "styles/theme";


export const ContainerWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: ${({theme})=> theme.backgroundNeutral};
`;

export const Container = styled.div`
  width: 100%;
`;

export const PageTemplateContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  background-color: ${({ theme }) => theme.backgroundNeutral};

  & > div > div {
    // 로고 색 바꾸기
    & > div:nth-child(1) > svg > path {
      fill: ${April_Fools_Day_Theme.primaryNormal};
    }

    // 선택된거 배경색 변경
    & > div:nth-child(2) > div > a:nth-child(5) {
      background-color: ${April_Fools_Day_Theme.primaryNormal};
    }
  }
`;