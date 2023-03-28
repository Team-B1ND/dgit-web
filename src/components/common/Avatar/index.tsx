import * as S from "./style";
import { AvatarProps } from "./types";

const Avatar = ({ customStyle, src }: AvatarProps) => {
  return (
    <>
      <S.HexagonProfile
        src={src}
        onClick={() => window.open("https://github.com/", "_blank")}
      />
    </>
  );
};

export default Avatar;
