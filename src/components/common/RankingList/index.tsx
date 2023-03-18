import { RankingHeroProps, RankingListProps } from "./types";
import * as S from "./style";

const RankingList = ({ children, customStyle }: RankingListProps) => {
  return (
    <S.ListContainer style={{ ...customStyle }}>{children}</S.ListContainer>
  );
};

const RankingHero = ({ children }: RankingHeroProps) => {
  return (
    <S.HeroText>
      <span style={{ color: "white" }}>Ranking</span>
      <span style={{ color: "#A8A8A8" }}>for</span>
      <span style={{ fontWeight: "bold" }}>{children}</span>
    </S.HeroText>
  );
};

const RankingTable = () => {};

export default Object.assign(RankingList, {
  Hero: RankingHero,
  Table: RankingTable,
});
