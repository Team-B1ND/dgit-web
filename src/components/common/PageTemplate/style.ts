import styled from "styled-components";

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
      fill: ${({theme})=>theme.primaryNormal};
    }
 
    
  }
`;