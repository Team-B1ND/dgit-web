import * as S from "./style";
import { AvatarProps } from "./types";

const Avatar = ({ customStyle, src, isHexagonFrame, name }: AvatarProps) => {
  return (
    <S.GitProfile
      style={{ ...customStyle }}
      src={src}
      onClick={() => window.open(`https://github.com/${name}`)}
      isHexagonFrame={isHexagonFrame}
    />
  );
};

export default Avatar;
