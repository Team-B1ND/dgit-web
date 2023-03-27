import * as S from "./style";
import { AvatarProps } from "./types";

const Avatar = ({ customStyle, src }: AvatarProps) => {
  return (
    <S.ProfileContainer>
      <S.ProfileAbleContainer>
        <S.GithubName>Sanghyun0505</S.GithubName>
        <S.ProfileInfo>2408 박상현</S.ProfileInfo>
      </S.ProfileAbleContainer>
      <S.HexagonContainer>
        <S.HexagonProfile
          src={src}
          onClick={() => window.open("https://github.com/", "_blank")}
        />
      </S.HexagonContainer>
    </S.ProfileContainer>
  );
};

export default Avatar;
