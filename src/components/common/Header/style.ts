import styled from "styled-components";

export const HeaderTextBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderText = styled.p`
  font-size: 36px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  column-gap: 10px;
  line-height: 43px;
  margin-bottom: 40px;
`;

export const HeaderLoginText = styled.p`
  color: white;
  cursor: pointer;
`;

export const CommitOptionButton = styled.button<{ background: string }>`
  border: 2px solid #6c93f8;
  border-radius: 30px;
  cursor: pointer;
  width: 78px;
  height: 28px;
  color: white;
  background: ${({ background }) => background};
`;
