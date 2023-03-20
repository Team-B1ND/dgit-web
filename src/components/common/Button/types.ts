import { CSSProperties } from "react";

export interface ButtonType {
  onClick?: () => void;
  disabled?: boolean;
  label: string;
  style?: CSSProperties;
  color: ColorType;
}

export type ColorType = "submit" | "cancel";
