import * as S from "./style";
import { AvatarProps } from "./types";

const Avatar = ({ customStyle, src }: AvatarProps) => {
  return <S.Container style={{ ...customStyle }} src={src} />;
};

export default Avatar;