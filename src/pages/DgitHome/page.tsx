import * as  S from "./style";
import { DodamSegmentedButton, DodamTag } from "@b1nd/dds-web";
import { useDgitHome } from "hooks/home/useDgitHome";
import RepositoryRankingPage from "components/Ranking/Repository";
import CommitRankingPage from "components/Ranking/Commit";
import PullRequestRankingPage from "components/Ranking/PullRequest";
import WeeklyRecord from "components/Ranking/WeeklyRecord";
import SideProfile from "components/SideProfile";

const DgitPage = () => {
  
  const {...dgit} = useDgitHome();
  
  return (
   <S.HomeBox>
    <S.DgitBox>
      <S.DgitNameText>
        <span>
        DGIT
        </span>
        </S.DgitNameText>
        <S.Header>
          <DodamSegmentedButton 
          num={dgit.pageData.length} 
          type={"block"} 
          data={dgit.pageData} 
          onClick={dgit.handleClickPageButton}
          />
          <S.TageBox>
            {
              dgit.pageData.some(item => item.text === "주간기록" && item.isAtv) ?
                ""
              :
              (
                <>
                <DodamTag  text="전체" color={dgit.commitType=='total' ? 'blue' : 'default'} 
                customStyle={{cursor:"pointer"}}
                onClick={()=>dgit.setCommitType('total')}
                />
                <DodamTag text="이번주" color={dgit.commitType=='week' ? 'blue' : 'default'}
                customStyle={{cursor:"pointer"}}
                onClick={()=>dgit.setCommitType('week')}
                />
                </>
              )
            }
          </S.TageBox>
        </S.Header>
        <S.DgitDataBox>
          {dgit.pageData.some(item => item.text === "주간기록" && item.isAtv) ? (
            <WeeklyRecord />
          ) :
          dgit.pageData.some(item => item.text === "PR" && item.isAtv) ? (
            <PullRequestRankingPage />
          ) :
          dgit.pageData.some(item => (item.text === "레포지토리" || item.text === "레포") && item.isAtv) ? (
            <RepositoryRankingPage />
          ) : dgit.pageData.some(item => item.text === "커밋" && item.isAtv) ? (
            <CommitRankingPage commitType={dgit.commitType} />
          ) : null}
        </S.DgitDataBox>
    </S.DgitBox>
    <S.SideBox>
          <SideProfile/>
    </S.SideBox>
   </S.HomeBox>
  );
};

export default DgitPage;
