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