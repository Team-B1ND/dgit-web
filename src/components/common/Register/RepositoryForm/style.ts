import styled from "styled-components";

export const RepositoryBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const UserInput = styled.div`
  display: flex;
  margin-left: 8%;
  margin-top: 4px;
  align-items: center;
  gap: 10px;
`;

export const RepositoryInput = styled.div`
  display: flex;
  margin-left: 8%;
`;

export const RepositoryButton = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
export const RepositoryText = styled.div`
  display: flex;
  padding-left: 8%;
  color: ${({theme})=>theme.labelNormal};

`;
