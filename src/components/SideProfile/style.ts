import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";


export const SideProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 200px;
    max-width: 300px;
    background-color: ${({theme})=>theme.backgroundNormal};
    ${DodamShape.Large};
    padding: 16px;
    gap: 16px;
    @media (max-width: 797px) {
     max-width: 300px;
     width: 100%;
     height: min-content;
    }
`
export const SideProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
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
    span{
        color: ${({theme})=>theme.labelNormal};
    }
`