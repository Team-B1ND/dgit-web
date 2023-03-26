import * as S from "./style";
import { MedalProps } from "./types";

const Medal = ({ children, customStyle, rank }: MedalProps) => {
  return (
    <S.Container rank={rank} style={{ ...customStyle }}>
      <S.Wrap>{children}</S.Wrap>
    </S.Container>
  );
};

export default Medal;
