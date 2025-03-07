import * as  S from "./style";
import { DodamSegmentedButton, DodamTag } from "@b1nd/dds-web";
import { useDgitHome } from "hooks/home/useDgitHome";
import CommitPage from "components/Ranking/Commit";

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
            <CommitPage commitType={dgit.commitType}/>
        </S.DgitDataBox>
    </S.DgitBox>
   </S.HomeBox>
  );
};

export default DgitPage;
