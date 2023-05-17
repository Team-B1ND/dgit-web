import { useGetMemberQuery } from "../../../queries/member/member.query";
import Avatar from "../Avatar";
import * as S from "./style";

const GitInfo = () => {
  const { data } = useGetMemberQuery({ suspense: true });
  return (
    <S.GitInfoContainer>
      <S.GitInfoAbleContainer>
        <S.GithubName>{data?.data.githubId}</S.GithubName>
        <S.StudentInfo>{data?.data.name}</S.StudentInfo>
      </S.GitInfoAbleContainer>
      <S.ProfileContainer>
        <Avatar
          src={String(data?.data.userImage)}
          isHexagonFrame={true}
          name={String(data?.data.githubId)}
        />
      </S.ProfileContainer>
    </S.GitInfoContainer>
  );
};

export default GitInfo;
