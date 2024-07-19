import styled, {css, createGlobalStyle} from "styled-components";

interface PageTypo {
    background_image?: any;
}

export const Wrap = styled.div<PageTypo>`
    ${({ background_image }) => background_image && css`
        background: url(${background_image}) center center / cover no-repeat;
    `}  
    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${props => props?.theme?.colorPalettes?.tertiary?.purple1050};
        backdrop-filter: blur(10px);    
        z-index: 1;      
    }
    position: relative;
    height: 100vh;
    padding: 35px;
`;

export const Content = styled.section`
    position: relative;
    z-index: 2;
    width: 100%;
`;