import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const ListContainer = styled.div`
  min-width: 350px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const TableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: scroll;
 
  &::-webkit-scrollbar {
    display: none;
  }

`;

export const THeadContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  height: 50px;
  position: sticky;
  z-index: 3;
  top: 0px;
  background-color: ${({theme})=>theme.backgroundNormal};
`;

export const ThContainer = styled.div`
  width: 100%;
  ${DodamTypography.Body1.Bold};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({theme})=>theme.labelNormal};
`;

export const TBodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  tr {
    width: 100%;
    height: 80px;
    display: flex;
  }
`;

export const TdContainer = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  ${DodamTypography.Body1.Regular};
  color: ${({theme})=>theme.labelNormal};
`;

export const TdStrongContainer = styled.div`
  width: 100%;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  ${DodamTypography.Heading1.Medium};

  color: ${({theme})=>theme.primaryNormal};
`;