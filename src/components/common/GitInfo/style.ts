import styled from "styled-components";

export const GitInfoContainer = styled.div`
  display: flex;
  flex-direction: row;

  float: right;
  margin: 30px 30px 0 0;
  justify-content: space-between;

  width: 250px;
  height: 52px;
`;

export const GitInfoAbleContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 205px;
  margin-right: 5px;

  text-align: right;
  align-items: right;
  justify-content: center;
`;

export const GithubName = styled.div`
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StudentInfo = styled.div`
  color: #9e9e9e;
  font-size: 13px;
`;

export const ProfileContainer = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
`;
