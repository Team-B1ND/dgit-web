import styled from "styled-components";
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";

const ProfileFallbackLoader = () => {
  return <Container />;
};

export default ProfileFallbackLoader;

const Container = styled.div`
  width: 200px;
  height: 52px;

  ${skeletonAnimtaion}
`;
