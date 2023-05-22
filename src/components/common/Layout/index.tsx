import * as S from "./style";
import Nav from "../Nav";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Nav />
      <S.Container>{children}</S.Container>
    </>
  );
};

export default Layout;
