import { CommonComponentProps } from "../common.type";

export interface MedalProps extends CommonComponentProps {
  rank: number;
}

export const MedalColor: Record<number, string> = {
  1: "#FFD700",
  2: "#C0C0C0",
  3: "#9E4D20",
} as const;
