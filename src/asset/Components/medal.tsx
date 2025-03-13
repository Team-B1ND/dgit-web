
import { IconProps } from "./type";
import { StyledPath, StyledSvg } from "./style";

export const MedalSvg = ({size = 40, color ,$svgStyle, $pathStyle }: IconProps) => {
  return (
    <StyledSvg
      width={size}
      height={size+7}
      viewBox="0 0 40 47"
      xmlns="http://www.w3.org/2000/svg"
      $svgStyle={$svgStyle}
    >
        <StyledPath 
          fill-rule="evenodd" 
          clip-rule="evenodd"
          d="M0 11.746L20 0L40 11.746V34.1874V34.6032L20 46.3492L0 34.9206V11.746ZM20 4.12698L3.1746 13.6508L3.49206 32.6984L20 42.2222L36.5079 32.6984V13.6508L20 4.12698Z"
          $pathStyle={$pathStyle}
          color={color!}
        />
   
    </StyledSvg>
  );
};

