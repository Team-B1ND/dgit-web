import styled from "styled-components";

export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 100%;
  object-fit: cover;
`;

// export const PatchButton = styled.div<isPatch:boolean>`
//   font-size: 22px;
//   /* width: 30px; */
//   margin-bottom: ${(props) => (props.isRegister ? "" : "5px")};
//   /* color: ${(props) => (props.isPatch ? "red" : "blue")}; */
// `;

export const PatchButton = styled.div<{ isPatch: boolean }>`
  font-size: 22px;
  /* color: #9a9a9a; */
  color: ${(props) => (props.isPatch ? "red" : "green")};
  margin-right: ${(props) => (props.isPatch ? "" : "10px")};
`;
