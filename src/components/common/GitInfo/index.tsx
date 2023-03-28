import Avatar from "../Avatar";
import * as S from "./style";

const GitInfo = () => {
  const data: string = "https://avatars.githubusercontent.com/u/123962815?v=4"; //임시프로필
  return (
    <S.GitInfoContainer>
      <S.GitInfoAbleContainer>
        <S.GithubName>Sanghyun0505</S.GithubName>
        <S.StudentInfo>2408 박상현</S.StudentInfo>
      </S.GitInfoAbleContainer>
      <S.AvatarContainer>
        <Avatar src={data} />
      </S.AvatarContainer>
    </S.GitInfoContainer>
  );
};

export default GitInfo;
