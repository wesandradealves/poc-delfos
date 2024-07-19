import styled, {css, createGlobalStyle} from "styled-components";

export const Container = styled.div`
    padding-top: 24px;
    padding-bottom: 24px;
    gap: 24px 0;
`;

export const Content = styled.div`
    width: 100%;
`;

export const Text = styled.p`
    font-size: 1rem;
    @media screen and (min-width: ${props => props?.theme?.breakpoints?.screenXxlMin}) {
        font-size: 1.25rem;
    }
    line-height: 1.4;
`;

export const Title = styled.h2`
  font-optical-sizing: auto;
  color: white;
  margin: 0;
  font-weight: 700;
  font-family: "Roboto Slab", serif;
  @media screen and (min-width: ${props => props?.theme?.breakpoints?.screenMdMin}) {
    font-size: 2rem;
  }
`;

export const Grid = styled.div`
  margin: -8px;
`;