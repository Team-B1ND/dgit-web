import styled from "styled-components";

export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 100%;
  object-fit: cover;
`;

export const PatchButton = styled.div<{ isPatch: boolean }>`
  font-size: 22px;

  color: ${(props) => (props.isPatch ? "red" : "green")};
  margin-right: ${(props) => !props.isPatch && "10px"};
`;
