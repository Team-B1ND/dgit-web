import {
  HeaderBottomImg,
  HeaderCategoryBox,
  HeaderContainer,
  HeaderMidWrap,
  HeaderTitle,
  HeaderTitleText,
  HeaderTopWrap,
} from "./style";
import Logo from "../../../asset/Logo/Logo.svg";
import { AiOutlinePlusSquare } from "react-icons/ai";
import gradation1 from "../../../asset/Common/Header/gradation1.svg";
import gradation2 from "../../../asset/Common/Header/gradation2.svg";
import gradation3 from "../../../asset/Common/Header/gradation3.svg";
import { useNavigate } from "react-router-dom";
import { HEADER_ITEM } from "../../../constants/header/header.constant";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderTopWrap>
        <HeaderTitle src={Logo} />
        <HeaderTitleText>DGIT</HeaderTitleText>
      </HeaderTopWrap>
      <HeaderMidWrap>
        순위
        {HEADER_ITEM.map((item) => {
          return (
            <HeaderCategoryBox
              key={item.link}
              onClick={() => navigate(item.link)}
            >
              <item.icon size={20} />
              {item.title}
            </HeaderCategoryBox>
          );
        })}
      </HeaderMidWrap>
      <HeaderMidWrap>
        등록
        <HeaderCategoryBox>
          <AiOutlinePlusSquare size={20} />
          REGISTER
        </HeaderCategoryBox>
      </HeaderMidWrap>
      <HeaderBottomImg src={gradation1} />
      <HeaderBottomImg src={gradation2} />
      <HeaderBottomImg src={gradation3} />
    </HeaderContainer>
  );
};

export default Header;
