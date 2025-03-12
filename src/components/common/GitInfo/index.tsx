import { useGetMemberQuery } from "../../../queries/member/member.query";
import { Avatar } from "@b1nd/dds-web";
import * as S from "./style";
import defaultProfile from "../../../asset/Common/defaultProfile.png";
const GitInfo = () => {
  const { data } = useGetMemberQuery({ suspense: true });
  return (
    <S.GitInfoContainer>
      <S.GitInfoAbleContainer>
        <S.GithubName>{data?.data.githubId}</S.GithubName>
        <S.StudentInfo>{data?.data.name}</S.StudentInfo>
      </S.GitInfoAbleContainer>
      <S.ProfileContainer>
        {
          data?.data.userImage ? <img src={data?.data.userImage} alt="" />
          : <Avatar/>
        }
      </S.ProfileContainer>
    </S.GitInfoContainer>
  );
};

export default GitInfo;
