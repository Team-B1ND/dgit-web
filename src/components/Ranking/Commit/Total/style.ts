import styled from "styled-components";
import Button from "../../../common/Button";

export const ProfileImg = styled.img`
  cursor: pointer;
  width: 50px;
  height: 50px;

  border-radius: 100%;
  object-fit: cover;

 
`;

export const BigProfileImg = styled.img`
  width: 100px;
  height: 100px;
  @media (max-width: 1268px) {
    width: 40px; 
    height: 40px;
    }
  border-radius: 100%;
  object-fit: cover;
`;

export const DeleteButton = styled.div`
  font-size: 25px;
  color: red;
`;
