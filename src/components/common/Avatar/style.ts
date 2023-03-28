import styled from "styled-components";

export const HexagonProfile = styled.img`
  width: 52px;
  height: 52px;
  clip-path: polygon(50% 0, 95% 25%, 95% 76%, 50% 100%, 5% 75%, 5% 25%);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #2d2d2d;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  cursor: pointer;
`;
