import {
  RankingHeroProps,
  RankingListProps,
  RankingTableProps,
  RankingTBodyProps,
  RankingTBodyTDProps,
  RankingTHeadProps,
  RankingTHeadTHProps,
} from "./types";
import * as S from "./style";
import { palette } from "../../../styles/palette";
import config from "../../../config/config.json";
const RankingList = ({ children, customStyle }: RankingListProps) => {
  return (
    <S.ListContainer style={{ ...customStyle }}>{children}</S.ListContainer>
  );
};

const RankingHero = ({ children }: RankingHeroProps) => {
  const authUrl = `https://dauth.b1nd.com/login?client_id=${config.clientId}&redirect_uri=http://localhost:3000/callback`;
  return (
    <S.HerorTextBox>
      <S.HeroText>
        <span style={{ color: "white" }}>Ranking</span>
        <span style={{ color: "#A8A8A8" }}>for</span>
        <span style={{ fontWeight: "bold", color: palette.main }}>
          {children}
        </span>
      </S.HeroText>
      <S.HeroLoginText onClick={() => (window.location.href = authUrl)}>
        도담도담 계정으로 로그인
      </S.HeroLoginText>
    </S.HerorTextBox>
  );
};

const RankingTable = ({ children, customStyle }: RankingTableProps) => {
  return (
    <S.TableContainer style={{ ...customStyle }}>{children}</S.TableContainer>
  );
};

const RankingTHead = ({ customStyle, children }: RankingTHeadProps) => {
  return (
    <S.THeadContainer style={{ ...customStyle }}>{children}</S.THeadContainer>
  );
};

const RankingTHeadTH = ({ children, customStyle }: RankingTHeadTHProps) => {
  return <S.ThContainer style={{ ...customStyle }}>{children}</S.ThContainer>;
};

const RankingTBody = ({ children, customStyle }: RankingTBodyProps) => {
  return (
    <S.TBodyContainer style={{ ...customStyle }}>{children}</S.TBodyContainer>
  );
};

const RankingTBodyTD = ({ children, customStyle }: RankingTBodyTDProps) => {
  return <S.TdContainer style={{ ...customStyle }}>{children}</S.TdContainer>;
};

export default Object.assign(RankingList, {
  Hero: RankingHero,
  Table: Object.assign(RankingTable, {
    THead: Object.assign(RankingTHead, {
      Th: RankingTHeadTH,
    }),
    TBody: Object.assign(RankingTBody, {
      Td: RankingTBodyTD,
    }),
  }),
});
