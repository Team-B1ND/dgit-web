import { atom } from "recoil";

type CommitRankType = "total" | "weekly";

export const commitRankTypeAtom = atom<CommitRankType>({
  key: "commitType",
  default: "total",
});
