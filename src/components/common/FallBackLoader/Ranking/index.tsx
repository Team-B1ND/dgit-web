import styled from "styled-components";
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";
const RankingFallbackLoader = () => {
  return (
    <>
      <Container>
        {Array.from({ length: 6 }).map((_, idx) => (
          <Box key={idx} />
        ))}
      </Container>
      ;
    </>
  );
};

export default RankingFallbackLoader;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  row-gap: 10px;
`;

const Box = styled.div`
  ${skeletonAnimtaion}

  width: 100%;
  height: 80px;
`;
