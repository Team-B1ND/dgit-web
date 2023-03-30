import * as S from "./style";
import { AvatarProps } from "./types";

const Avatar = ({ customStyle, src, isHexagonFrame }: AvatarProps) => {
  return (
    <S.GitProfile
      style={{ ...customStyle }}
      src={src}
      onClick={() => window.open("https://github.com/")}
      isHexagonFrame={isHexagonFrame}
    />
  );
};

export default Avatar;
