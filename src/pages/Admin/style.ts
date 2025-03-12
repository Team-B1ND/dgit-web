import styled from "styled-components";

export const ChangeBox = styled.div`
    display: flex;
    gap: 10px;
    width: 20%;
    height: 40px;
`

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
`;

export const RepositoryBox = styled.div`
overflow-y: scroll;
&::-webkit-scrollbar {
    display: none;
  }
`
