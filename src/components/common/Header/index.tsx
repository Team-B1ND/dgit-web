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
        <HeaderCategoryBox onClick={() => navigate("/")}>
          <HiOutlinePencilAlt size={20} />
          COMMIT
        </HeaderCategoryBox>
        <HeaderCategoryBox onClick={() => navigate("/pr-ranking")}>
          <AiOutlineStar size={20} />
          REPOSITORY
        </HeaderCategoryBox>
        <HeaderCategoryBox onClick={() => navigate("/pr-ranking")}>
          <BiGitPullRequest size={20} />
          PULL-REQUEST
        </HeaderCategoryBox>
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
