import styled from "styled-components";

export const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HerorTextBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeroText = styled.p`
  font-size: 36px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  column-gap: 10px;
  line-height: 43px;
  margin-bottom: 40px;
`;

export const HeroLoginText = styled.p`
  color: white;
`;

export const TableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const THeadContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #1e1e1e;
  height: 50px;
  margin-bottom: 20px;
  position: sticky;
  z-index: 0;
  top: 0px;
`;

export const ThContainer = styled.div`
  width: 100%;
  color: white;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const TBodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  tr {
    width: 100%;
    height: 80px;
    display: flex;
    background-color: #2d2d2d;
  }
`;

export const TdContainer = styled.div`
  width: 100%;
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

export const TdStrongContainer = styled.div`
  width: 100%;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;
  font-size: 24px;

  color: #6c93f8;
`;
