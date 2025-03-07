import { THEME_KEY } from "constants/Theme/theme.contant";
import { ETheme } from "enum/Theme/theme.enum";

export const getTheme = (): ETheme => {
  if (typeof window === "undefined") {
    return ETheme.LIGHT; // 서버 사이드에서는 기본적으로 LIGHT 반환
  }

  const themeMode = window.localStorage.getItem(THEME_KEY) as ETheme | null;

  // 저장된 테마가 없으면 시스템 설정을 따라감
  if (!themeMode) {
    const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return isDarkTheme ? ETheme.DARK : ETheme.LIGHT;
  }

  // 저장된 테마가 DARK인지 체크 후 반환
  return themeMode === ETheme.DARK ? ETheme.DARK : ETheme.LIGHT;
};
