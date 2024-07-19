import styled, {css, createGlobalStyle} from "styled-components";

export const Content = styled.header`
    width: 100%;
    img {
        max-width: 200px;
    }
    color: white;
    background: ${props => props?.theme?.colorPalettes?.tertiary?.purple1100};
    a {
        color: inherit;
        &:hover {
            color: ${props => props?.theme?.colorPalettes?.primary?.yellow400};
        }        
    }
`;

export const Container = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
    gap: 0 45px;
    @media screen and (min-width: ${props => props?.theme?.breakpoints?.screenLgMin}) {
        gap: 0 90px;
    }
`;

export const Nav = styled.nav`
    gap: 0 33px;
    @media screen and (min-width: ${props => props?.theme?.breakpoints?.screenLgMin}) {
        gap: 0 66px;
    }
`;

export const NavItem = styled.span`
    color: inherit;
    font-weight: 700;
    font-size: 1.5rem;
    .--active {
        color: ${props => props?.theme?.colorPalettes?.primary?.yellow400};
    }
`;