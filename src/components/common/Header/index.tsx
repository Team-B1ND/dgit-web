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
import { HiOutlinePencilAlt } from "react-icons/hi";
import { AiOutlineStar, AiOutlinePlusSquare } from "react-icons/ai";
import { BiGitPullRequest } from "react-icons/bi";
import Rectangle1 from "../../../asset/Common/Rectangle1.svg";
import Rectangle2 from "../../../asset/Common/Rectangle2.svg";
import Rectangle3 from "../../../asset/Common/Rectangle3.svg";
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
          const Icon = item.icon;
          return (
            <HeaderCategoryBox
              key={item.link}
              onClick={() => navigate(`${item.link}`)}
            >
              <Icon size={20} />
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
      <HeaderBottomImg src={Rectangle1} />
      <HeaderBottomImg src={Rectangle2} />
      <HeaderBottomImg src={Rectangle3} />
    </HeaderContainer>
  );
};

export default Header;
