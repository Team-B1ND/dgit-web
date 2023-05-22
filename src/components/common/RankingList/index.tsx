import {
  RankingListProps,
  RankingTableProps,
  RankingTBodyProps,
  RankingTBodyTDProps,
  RankingTHeadProps,
  RankingTHeadTHProps,
} from "./types";
import * as S from "./style";

const RankingList = ({ children, customStyle }: RankingListProps) => {
  return (
    <S.ListContainer style={{ ...customStyle }}>{children}</S.ListContainer>
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

const RankingStrongTbodyTd = ({
  children,
  customStyle,
}: RankingTBodyTDProps) => {
  return (
    <S.TdStrongContainer style={{ ...customStyle }}>
      {children}
    </S.TdStrongContainer>
  );
};

export default Object.assign(RankingList, {
  Table: Object.assign(RankingTable, {
    THead: Object.assign(RankingTHead, {
      Th: RankingTHeadTH,
    }),
    TBody: Object.assign(RankingTBody, {
      Td: RankingTBodyTD,
      Strong: RankingStrongTbodyTd,
    }),
  }),
});
