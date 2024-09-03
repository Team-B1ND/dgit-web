import * as S from "./style";
import Logo from "../../../asset/Logo/Logo.svg";
import { AiOutlinePlusSquare } from "react-icons/ai";
import gradation1 from "../../../asset/Common/Header/gradation1.svg";
import gradation2 from "../../../asset/Common/Header/gradation2.svg";
import gradation3 from "../../../asset/Common/Header/gradation3.svg";
import { useNavigate } from "react-router-dom";
import { NAV_ITEM } from "./constant";
import Register from "../Register";
import useModal from "../../../hooks/util/useModal";
import useLogout from "../../../hooks/auth/useLogout";
import token from "../../../lib/token/token";
import { ACCESS_TOKEN_KEY } from "../../../constants/token/token.constant";
import { FiLogOut } from "react-icons/fi";

const Nav = () => {
  const navigate = useNavigate();
  const { open } = useModal();
  const { logOut } = useLogout();
  const dodamURL = "https://dodam.b1nd.com";
  return (
    <S.NavContainer>
      <S.NavTopWrap>
        <S.NavTitle
          src={Logo}
          onClick={() => (window.location.href = dodamURL)}
        />
        <S.NavTitleText >
          DGIT
        </S.NavTitleText>
      </S.NavTopWrap>
      <S.NavMidWrap>
        순위
        {NAV_ITEM.map((item) => {
          return (
            <S.NavCategoryBox
              key={item.link}
              onClick={() => navigate(item.link)}
            >
              <item.icon size={20} />
              {item.title}
            </S.NavCategoryBox>
          );
        })}
      </S.NavMidWrap>
      <S.NavMidWrap>
        등록
        <S.NavCategoryBox onClick={open}>
          <AiOutlinePlusSquare size={20} />
          REGISTER
        </S.NavCategoryBox>
        {token.getToken(ACCESS_TOKEN_KEY) && (
          <S.NavLogoutWrap onClick={logOut}>
            <S.NavLogoutText>로그아웃</S.NavLogoutText>
            <FiLogOut />
          </S.NavLogoutWrap>
        )}
      </S.NavMidWrap>
      <Register />
      <S.NavBottomImg src={gradation1} />
      <S.NavBottomImg src={gradation2} />
      <S.NavBottomImg src={gradation3} />
    </S.NavContainer>
  );
};

export default Nav;
