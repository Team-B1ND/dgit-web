import styled from "styled-components";

export const ProfileContainer = styled.div`
    display:flex;
    flex-direction:row;

    float:right;
    margin: 30px 30px 0 0;
    justify-content:space-between;
    background-color:black;

    width:460px;
    height:52px;
`;

export const ProfileAbleContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:420px;
    
    text-align:right;
    align-items:right;
    justify-content:center;
`;

export const GithubName = styled.div`
    color:#FFFFFF;
    font-weight:bold;
    font-size:18px;
`;

export const ProfileInfo = styled.div`
    color:#9E9E9E;
    font-size:13px;
`;

export const Container = styled.div`
  width: 50px;
  height: 50px;
  clip-path: polygon(50% 0, 95% 25%, 95% 76%, 50% 100%, 5% 75%, 5% 25%);
  position: relative;
`;

export const Wrap = styled.img`
  width: 42px;
  height: 42px;
  clip-path: polygon(50% 0, 95% 25%, 95% 76%, 50% 100%, 5% 75%, 5% 25%);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #2d2d2d;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  cursor: pointer;
`;