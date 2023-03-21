import styled, { css } from "styled-components";
import { ButtonType } from "./types";

export const ButtonContainer = styled.button<{
  buttonType: ButtonType;
}>`
  width: 100px;
  height: 40px;
  border: none;

  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;

  ${({ buttonType }) => colorSet[buttonType]}
`;

const colorSet = {
  submit: css`
    background: #6c93f8;
    color: #2d2d2d;
  `,
  cancel: css`
    background: gray;
    color: #ffffff;
  `,
};
