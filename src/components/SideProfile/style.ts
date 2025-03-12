import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";


export const SideProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 200px;
    max-width: 400px;
    background-color: ${({theme})=>theme.backgroundNormal};
    ${DodamShape.Large};
    padding: 16px;
    gap: 16px;
    @media (max-width: 797px) {
     max-width: 400px;
     width: 100%;
     height: min-content;
    }
`
export const SideProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    height: 100%;
    span{
        ${DodamTypography.Headline.Bold};
        color: ${({theme})=>theme.labelNormal};
    }
`
export const InfoBox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    span{
        color: ${({theme})=>theme.labelNormal};
    }
`

export const AddRegister = styled.div`
    display: flex;
    width: 100%;
    gap: 5px;
    justify-content: center;
    align-items: center;
`

export const RegisterBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    width: 100%;
    height: 50px;
    max-width: 400px;
    background-color: ${({theme})=>theme.backgroundNormal};
    ${DodamShape.Large};
    padding: 16px;
    gap: 16px;

    span{
        ${DodamTypography.Headline.Bold};
        color: ${({theme})=>theme.labelNormal};
    }

    @media (max-width: 797px) {
     max-width: 400px;
     width: 100%;
     height: min-content;
    }
`