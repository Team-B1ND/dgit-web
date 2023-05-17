import GitInfo from "../GitInfo";
import * as S from "./style";
import Header from "../Header";
import token from "../../../lib/token/token";
import { ACCESS_TOKEN_KEY } from "../../../constants/token/Token.constant";
import config from "../../../config/config.json";

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
