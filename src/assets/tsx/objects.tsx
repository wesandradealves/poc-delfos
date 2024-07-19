import styled, {css, createGlobalStyle} from "styled-components";

export const Button = styled.button`
    padding: 19px;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 4px;
    color: ${props => props?.theme?.colorPalettes?.secondary?.blue950};
    &.primary {
        background: ${props => props?.theme?.colorPalettes?.primary?.yellow200};
        border: 1px ${props => props?.theme?.colorPalettes?.primary?.yellow200} solid;
        &:hover {
            background: transparent;
            color: ${props => props?.theme?.colorPalettes?.primary?.yellow200};
        }
    }
`;