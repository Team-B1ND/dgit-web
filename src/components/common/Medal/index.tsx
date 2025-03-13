import * as S from "./style";
import { MedalColor, MedalProps } from "./types";
import { MedalSvg } from "asset/Components/medal";

const Medal = ({ children, rank }: MedalProps) => {
  
  
  return (
    <S.Container>
      {rank!<4 ? <MedalSvg color={MedalColor[rank]}/>  : ""}
      <S.Wrap>{children}</S.Wrap>
    </S.Container>
  );
};

export default Medal;
