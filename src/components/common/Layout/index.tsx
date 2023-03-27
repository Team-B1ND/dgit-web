import Avatar from "../Avatar";
import * as S from "./style";

interface Props {
  children: React.ReactNode;
}
const data = "https://avatars.githubusercontent.com/u/123962815?v=4"; //임시프로필
const Layout = ({ children }: Props) => {
  return (
    <>
      <Avatar src={data} />
      <S.Container>{children}</S.Container>
    </>
  );
};

export default Layout;
