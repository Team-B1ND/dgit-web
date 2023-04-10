import { atom } from "recoil";

export const RegisterModalOpenAtom = atom<boolean>({
  key: "modalAtom",
  default: false,
});
