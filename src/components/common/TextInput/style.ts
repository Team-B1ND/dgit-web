import styled from "styled-components";

export const TextInputContainer = styled.input`
  width: 331px;
  height: 40px;
  background: #222222;
  outline: none;
  border: none;
  border-radius: 5px;
  color: white;
  padding-left: 10px;
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserInput = styled.div`
  display: flex;
  margin-left: 8%;
  margin-top: 4px;
  align-items: center;
  .UserButton {
    margin-left: 10px;
  }
`;
export const UserButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 55px;
  margin-right: 15px;
  .cancelButton {
    margin-right: 8px;
  }
`;
export const UserId = styled.div`
  display: flex;
  margin-top: 80px;
  margin-left: 8%;
  color: white;
`;

export const RepositoryInput = styled.div`
  display: flex;
  margin-left: 8%;
  margin-top: 4px;
`;

export const RepositoryID = styled.div`
  display: flex;
  color: white;
  margin-left: 8%;
  margin-top: 30px;
`;
export const RepositoryButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 18px;
  margin-right: 15px;
  .cancelButton {
    margin-right: 8px;
  }
`;
export const RepositoryUserId = styled.div`
  display: flex;
  margin-top: 25px;
  margin-left: 8%;
  color: white;
`;
