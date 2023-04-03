import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 250px;
  height: 100vh;

  background-color: #1e1e1e;
  color: #f6f6f6;

  display: flex;
  flex-direction: column;
  row-gap: 100px;

  cursor: pointer;
`;

export const HeaderTopWrap = styled.div`
  width: 100%;
  height: 50px;

  margin-top: 56px;
  text-align: center;
`;

export const HeaderTitle = styled.img``;

export const HeaderTitleText = styled.p`
  font-size: 16px;

  letter-spacing: 1em;
`;

export const HeaderMidWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  row-gap: 25px;
  font-size: 22px;
  padding-left: 46px;
`;

export const HeaderCategoryBox = styled.div`
  display: flex;
  column-gap: 14px;
`;
