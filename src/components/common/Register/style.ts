import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";


export const Content = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  background-color: ${({theme})=>theme.fillNormal};
  padding: 10px;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({theme})=>theme.backgroundNormal};
  height: 30%;
`;
export const ModalButton = styled.div<{
  active: boolean;
}>`
  display: flex;
  ${DodamTypography.Body2.Medium}

  

  .user {
    width: 110px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${({ active, theme })=> active ? theme.staticWhite : theme.labelNormal };
    border-top-left-radius: 5px;
    
    outline: none;
    border: none;
    background: ${({ active, theme }) => active ? theme.primaryNormal : theme.fillNeutral};
    
  }
  .repository {
    width: 110px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${({ active, theme })=> !active ? theme.staticWhite : theme.labelNormal };
    border: none;
    border-top-right-radius: 5px;
    background: ${({ active, theme }) => !active ? theme.primaryNormal : theme.fillNeutral};
  }
`;

export const ModalTextBox = styled.div`
  display: flex;
  height: 121px;
  align-items: center;
  .ModalText {
    display: flex;
    align-items: center;
    color: ${({theme})=>theme.labelNormal};
    ${DodamTypography.Heading1.Bold};
    margin-left: 40px;
  }
`;

export const ModalPortal = styled.div``;
