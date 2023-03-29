import * as S from "./style";
import { AvatarProps } from "./types";

const Avatar = ({ customStyle, src, isHexagonFrame }: AvatarProps) => {
  return (
    <S.ProfileContainer onClick={() => window.open("https://github.com/")}>
      {isHexagonFrame === true ? (
        <S.HexagonProfile style={{ ...customStyle }} src={src} />
      ) : (
        <S.CircleProfile style={{ ...customStyle }} src={src} />
      )}
    </S.ProfileContainer>
  );
};

export default Avatar;
