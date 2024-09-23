import * as S from "./style";
import Nav from "../Nav";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <S.ContainerWrap>
      <Nav />
      <S.Container>{children}</S.Container>
    </S.ContainerWrap>
  );
};

export default Layout;
