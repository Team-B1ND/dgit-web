import { CommonComponentProps } from "../common.type";

export interface RankingListProps extends CommonComponentProps {}

export interface RankingHeroProps
  extends Omit<CommonComponentProps, "customStyle"> {}
