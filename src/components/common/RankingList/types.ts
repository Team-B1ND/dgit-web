import { CommonComponentProps } from "../common.type";

export interface RankingListProps extends CommonComponentProps {}

export interface RankingHeroProps
  extends Omit<CommonComponentProps, "customStyle"> {}

export interface RankingTableProps extends CommonComponentProps {}

export interface RankingTHeadProps extends CommonComponentProps {}

export interface RankingTHeadTHProps extends CommonComponentProps {}

export interface RankingTBodyProps extends CommonComponentProps {}

export interface RankingTBodyTDProps extends CommonComponentProps {}
