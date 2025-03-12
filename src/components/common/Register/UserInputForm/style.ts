import styled from "styled-components";

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  
`;

export const UserInput = styled.div`
  display: flex;
  align-items: center;
  padding-left: 8%;
  width: 100%;
  gap: 10px;
`;

export const UserId = styled.div`
  display: flex;
  padding-left: 8%;
  color: ${({theme})=>theme.labelNormal};
`;

export const UserButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 10px;
  
`;
