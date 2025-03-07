import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const HomeBox = styled.div`
    width: 100%;
    height: 100%;
    padding: 58px 0px;
`

export const DgitBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    padding: 24px;
    ${DodamShape.Large};
    background-color: ${({theme})=>theme.backgroundNormal};

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