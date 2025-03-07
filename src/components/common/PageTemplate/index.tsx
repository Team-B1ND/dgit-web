import * as S from "./style";
import Nav from "../Nav";
import { Outlet } from "react-router-dom";
import { DodamNavBar } from "@b1nd/dds-web";
import { useThemes } from "hooks/Theme/usetheme";
import { useRecoilValue } from "recoil";
import { themeModeAtom } from "store/Theme/themeStore";
import token from "lib/token/token";
import { useNavigate } from "react-router-dom";

const PageTemplate = () => {
  const { handleTheme } =useThemes();
  const navigate = useNavigate();
  const currentTheme = useRecoilValue(themeModeAtom);
  const logOut = () => {
    token.clearToken();
    navigate("/sign");
  };
  
  return (
    <S.ContainerWrap>
      <DodamNavBar 
      location="dgit"
      currentTheme={currentTheme}
      logout={logOut}
      handleTheme={handleTheme}
    
      />
      <S.Container> 
        <Outlet />
      </S.Container>
    </S.ContainerWrap>
  );
};

export default PageTemplate;
