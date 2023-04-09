import styled from "styled-components";

// interface UserConainer {
//   isActive: boolean;
//   props: any;
// }

export const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  height: 40%;
  width: 40%;
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
export const ModalButton = styled.div`
  display: flex;
  .user {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: #2d2d2d;
    border: none;
    font-size: 14px;
    width: 110px;
    height: 40px;
    background-color: gray;
  }
  .repository {
    display: flex;
    align-items: center;
    color: white;
    background: #2d2d2d;
    border: none;
    font-size: 14px;
    background-color: gray;
    width: 110px;
    height: 40px;
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

export const UserButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 60px;
  margin-right: 15px;
  gap: 3px;
  .cancelButton {
    margin-right: 8px;
  }
`;
