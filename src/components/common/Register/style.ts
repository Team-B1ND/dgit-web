import styled from "styled-components";
import { colorType } from ".";

export const ModalContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
`;

export const Content = styled.div`
  display: flex;
  width: 800px;
  height: 397px;
  flex-direction: column;
  background: #3a3a3a;
`;

export const ModalBox = styled.div``;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #2d2d2d;
  height: 162px;
`;
export const ModalButton = styled.div<{
  userBackground: string;
  repositoryBackground: string;
}>`
  display: flex;
  font-size: 14px;

  .user {
    width: 110px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    border-top-left-radius: 5px;
    outline: none;
    border: none;
    background: ${({ userBackground }) => userBackground};
  }
  .repository {
    width: 110px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    border: none;
    border-top-right-radius: 5px;
    background: ${({ repositoryBackground }) => repositoryBackground};
  }
`;

export const ModalTextBox = styled.div`
  display: flex;
  height: 121px;
  align-items: center;
  .ModalText {
    display: flex;
    align-items: center;
    color: white;
    font-size: 32px;
    margin-left: 40px;
  }
`;

export const ModalPortal = styled.div``;
