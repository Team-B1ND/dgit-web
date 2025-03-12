import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const HomeBox = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 58px 0px;
    @media (max-width: 797px) {
    padding: 28px 20px 10% 20px;
    flex-direction: column-reverse;
    align-items: center;
    gap:10px
    }
`

export const DgitBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    padding: 24px;
    ${DodamShape.Large};
    background-color: ${({theme})=>theme.backgroundNormal};
    overflow: hidden;
    @media (max-width: 797px) {
        width: 100%;
    }
    
`

export const DgitNameText = styled.div`
    width: 100%;
    span{
        ${DodamTypography.Heading1.Bold};
        color: ${({theme})=>theme.labelNormal};
    }
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
    justify-content: space-between;
    padding: 16px 0;
`

export const TageBox = styled.div`
    width: 120px;
    height: 32px;
    display: flex;
    gap: 10px;
`
export const DgitDataBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 320px;
`

export const SideBox = styled.div`
    display: flex;
    width: 30%;
    height: 100%;
    padding: 0 32px;
    @media (max-width: 797px) {
        width: 100%;
        height: auto;
        justify-content: flex-end;
        padding: 0;
    }
`