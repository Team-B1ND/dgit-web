import * as S from "./style";

export default function Profile() {
  const data = "https://avatars.githubusercontent.com/u/123962815?v=4"; //임시프로필
  
  return (
    <S.ProfileContainer>
      <S.ProfileAbleContainer>
        <S.GithubName>Sanghyun0505</S.GithubName>
        <S.ProfileInfo>2408 박상현</S.ProfileInfo>
      </S.ProfileAbleContainer>
      <S.Container>
        <S.Wrap
          src={data}
          onClick={()=>
            window.open("https://github.com/","_blank")}
        />
      </S.Container>
    </S.ProfileContainer>
  );
}
