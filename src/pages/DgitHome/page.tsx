import * as  S from "./style";
import { DodamSegmentedButton, DodamTag } from "@b1nd/dds-web";
import { useDgitHome } from "hooks/home/useDgitHome";
import RepoStarsRankingPage from "pages/RepoStarsRankingPage";
import CommitRankingPage from "components/Ranking/Commit";

const DgitPage = () => {
  
  const {...dgit} = useDgitHome();
  console.log(dgit.pageData);
  
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
            
          <DodamTag  text="전체" color={dgit.commitType=='total' ? 'blue' : 'default'} 
          customStyle={{cursor:"pointer"}}
          onClick={()=>dgit.setCommitType('total')}
          />
          <DodamTag text="이번주" color={dgit.commitType=='week' ? 'blue' : 'default'}
          customStyle={{cursor:"pointer"}}
          onClick={()=>dgit.setCommitType('week')}
          />
          </S.TageBox>
        </S.Header>
        <S.DgitDataBox>
        {dgit.pageData.some(item => item.isAtv===true) ? (
            <CommitRankingPage commitType={dgit.commitType} />
          ) : dgit.pageData.some(item => item.text === "레포지토리") ? (
              <RepoStarsRankingPage/>
          ) : null}

        </S.DgitDataBox>
    </S.DgitBox>
   </S.HomeBox>
  );
};

export default DgitPage;
