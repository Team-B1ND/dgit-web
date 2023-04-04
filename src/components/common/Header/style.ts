import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;

  width: 250px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  row-gap: 100px;

  background-color: #1e1e1e;
  color: #f6f6f6;

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
  padding-left: 46px;
  font-size: 22px;
`;

export const HeaderCategoryBox = styled.div`
  display: flex;
  align-items: center;

  font-size: 16px;
  column-gap: 14px;
`;

export const HeaderBottomImg = styled.img`
  position: absolute;

  bottom: 0;
`;
