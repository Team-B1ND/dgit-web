import React, { CSSProperties } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  disabled?: boolean;
  children: string;
  style?: CSSProperties;
  buttonType: ButtonType;
}

export type ButtonType = "submit" | "cancel";
