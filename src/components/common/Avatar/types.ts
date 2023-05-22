import { CommonComponentProps } from "../common.type";

export interface AvatarProps extends Omit<CommonComponentProps, "children"> {
  src: string;
  isHexagonFrame: boolean;
  name: string;
}
