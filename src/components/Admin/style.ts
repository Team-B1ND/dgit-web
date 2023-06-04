import styled from "styled-components";

export const ChangeOption = styled.button<{ background: string }>`
  border: 2px solid #6c93f8;
  border-radius: 30px;

  width: 78px;
  height: 28px;
  color: white;
  background: ${({ background }) => background};
  
`;

export const AdminHeader = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: white;
  height: 80px;
  /* align-items: center; */
/* display: flex; */
  
  
  
  
  /* align-items: center; */
  /* align-items: center; */
`;
