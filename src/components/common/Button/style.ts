import styled, { css } from "styled-components";
import { ColorType } from "./types";

export const ButtonContainer = styled.button<{
  color: ColorType;
}>`
  width: 100px;
  height: 40px;
  border: none;

  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;

  ${({ color }) => colorStyle[color]}
`;

const colorStyle = {
  submit: css`
    background: #6c93f8;
    color: #2d2d2d;
  `,
  cancel: css`
    background: gray;
    color: #ffffff;
  `,
};
