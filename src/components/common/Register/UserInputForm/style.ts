import styled from "styled-components";

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserInput = styled.div`
  display: flex;
  margin-left: 8%;
  margin-top: 4px;
  align-items: center;
  gap: 10px;
`;

export const UserId = styled.div`
  display: flex;
  margin-top: 80px;
  margin-left: 8%;
  color: white;
`;

export const UserButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 37px;
  margin-right: 15px;
  .cancelButton {
    margin-right: 8px;
  }
`;
