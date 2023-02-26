import * as S from "./style";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <S.Container>{children}</S.Container>;
};

export default Layout;
