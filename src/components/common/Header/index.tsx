import {
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
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTopWrap>
        <HeaderTitle src={Logo} />
        <HeaderTitleText>DGIT</HeaderTitleText>
      </HeaderTopWrap>
      <HeaderMidWrap>
        순위
        <HeaderCategoryBox>
          <HiOutlinePencilAlt size={20} />
          COMMIT
        </HeaderCategoryBox>
        <HeaderCategoryBox>
          <AiOutlineStar size={20} />
          REPOSITORY
        </HeaderCategoryBox>
        <HeaderCategoryBox>
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
    </HeaderContainer>
  );
};

export default Header;
