import GitInfo from "../GitInfo";
import * as S from "./style";
import Header from "../Header";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <S.Container>{children}</S.Container>
    </>
  );
};

export default Layout;
