import React from "react";
import styled, { type Interpolation } from "styled-components";
import { IconProps } from "./type";
import { StyledPath, StyledSvg } from "./style";

export const GithubLogo = ({ size = 30,color="labelNormal", $svgStyle, $pathStyle }: IconProps) => {
  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      $svgStyle={$svgStyle}
    >
        <StyledPath 
          fill-rule="evenodd" 
          clip-rule="evenodd"
          d="M40 0C17.9 0 0 17.9 0 40C0 57.7 11.45 72.65 27.35 77.95C29.35 78.3 30.1 77.1 30.1 76.05C30.1 75.1 30.05 71.95 30.05 68.6C20 70.45 17.4 66.15 16.6 63.9C16.15 62.75 14.2 59.2 12.5 58.25C11.1 57.5 9.1 55.65 12.45 55.6C15.6 55.55 17.85 58.5 18.6 59.7C22.2 65.75 27.95 64.05 30.25 63C30.6 60.4 31.65 58.65 32.8 57.65C23.9 56.65 14.6 53.2 14.6 37.9C14.6 33.55 16.15 29.95 18.7 27.15C18.3 26.15 16.9 22.05 19.1 16.55C19.1 16.55 22.45 15.5 30.1 20.65C33.3 19.75 36.7 19.3 40.1 19.3C43.5 19.3 46.9 19.75 50.1 20.65C57.75 15.45 61.1 16.55 61.1 16.55C63.3 22.05 61.9 26.15 61.5 27.15C64.05 29.95 65.6 33.5 65.6 37.9C65.6 53.25 56.25 56.65 47.35 57.65C48.8 58.9 50.05 61.3 50.05 65.05C50.05 70.4 50 74.7 50 76.05C50 77.1 50.75 78.35 52.75 77.95C68.55 72.65 80 57.65 80 40C80 17.9 62.1 0 40 0Z"
          $pathStyle={$pathStyle}
          color={color!}
        />
   
    </StyledSvg>
  );
};


