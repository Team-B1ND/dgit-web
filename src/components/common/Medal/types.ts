import { CommonComponentProps } from "../common.type";
import { DodamColor } from "@b1nd/dds-web";

export interface MedalProps extends CommonComponentProps {
  rank: number;
}

export const MedalColor: Record<number, string> = {
  1: "statusCautionary",
  2: "labelAssistive",
  3: DodamColor.yellow30,
} as const;
