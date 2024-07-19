import styled, {css, createGlobalStyle} from "styled-components";

export const Nav = styled.nav`
    gap: 40px;
    @media screen and (min-width: ${props => props?.theme?.breakpoints?.screenWideMin}) {
        gap: 0 82px;
    }
    width: calc(100% + calc(35px*4));
    padding: 0 35px;
    overflow: auto;
    @media screen and (min-width: ${props => props?.theme?.breakpoints?.screenXlMin}) {
        margin: -35px 0;
        overflow: hidden;
        padding: 35px 0;
        width: auto;
    }
`;

export const NavItem = styled.span`
    padding: 40px 52px;
    line-height: 1.2;
    transition: 250ms ease-in-out all;
    color: white;
    &:hover {
        transform: scale(1.05);
        color: ${props => props?.theme?.colorPalettes?.primary?.yellow400};
    }
    a {
        color: inherit;
    }
    border-radius: 8px;
    background: ${props => props?.theme?.colorPalettes?.helper?.gray1000};
`;

export const Container = styled.div`
    gap: 40px 0;
    @media screen and (min-width: ${props => props?.theme?.breakpoints?.screenXxlMin}) {
        gap: 100px 0;
    }
`;

export const Intro = styled.div`
    gap: 24px 0;
    color: white;
`;

export const Text = styled.p`
    font-size: 1rem;
    @media screen and (min-width: ${props => props?.theme?.breakpoints?.screenXxlMin}) {
        font-size: 1.5rem;
    }
    line-height: 1.4;
    max-width: 903px;
`;

export const Subtitle = styled.small`
    font-size: 1.5rem;
    font-weight: 500;
`;

export const Label = styled.span`
    font-size: 1.5rem;
    @media screen and (min-width: ${props => props?.theme?.breakpoints?.screenXxlMin}) {
        font-size: 2.5rem;
    }
    font-weight: 700;
`;

export const Title = styled.h2`
  font-optical-sizing: auto;
  color: white;
  margin: 0;
  font-weight: 700;
  font-family: "Roboto Slab", serif;
  text-align: center;
  @media screen and (min-width: ${props => props?.theme?.breakpoints?.screenMdMin}) {
    font-size: 3rem;
  }
`;