import styled, { type Interpolation } from "styled-components";
export const StyledSvg = styled.svg<{ $svgStyle: Interpolation<object> }>`
  ${({ $svgStyle }) => $svgStyle}
`;

export const StyledPath = styled.path<{ color: string; $pathStyle: Interpolation<object> }>`
  fill: ${({ color, theme }) => theme[color as keyof typeof theme] || color};
  ${({ $pathStyle }) => $pathStyle}
`;

export const StyledCicle = styled.circle<{ color: string;}>`
fill: ${({ color, theme }) => theme[color as keyof typeof theme] || color};
`
