import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";
import styled from "styled-components";

const RankingBoxFallbackLoader = () => {
  return (
    <Container>
      <Item />
      <BigItem />
      <Item />
    </Container>
  );
};

export default RankingBoxFallbackLoader;

const Container = styled.div`
  width: 100%;
  height: 45vh;

  display: flex;
  justify-content: center;
  column-gap: 20px;
`;

const Item = styled.div`
  width: 240px;
  height: 232px;

  margin-top: 50px;
  border-radius: 30px;

  ${skeletonAnimtaion};
`;

const BigItem = styled.div`
  width: 250px;
  height: 232px;

  border-radius: 30px;

  ${skeletonAnimtaion};
`;
