import { atom } from "recoil";
import { ETheme } from "enum/Theme/theme.enum";
import { getTheme } from "utils/Theme/getTheme";

export const themeModeAtom = atom<ETheme>({
  key: "theme/themeModeAtom",
  default: getTheme(),
});