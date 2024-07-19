import styled, {css, createGlobalStyle} from "styled-components";

export const Form = styled.form`
    color: white;
    gap: 24px 0;
    width: 100%;
    max-width: 600px;
    padding: 80px 35px;
    background: ${props => props?.theme?.colorPalettes?.tertiary?.purple1000};
    .btn {
        min-width: 100%;
        @media screen and (min-width: ${props => props?.theme?.breakpoints?.screenSmMin}) {
            min-width: 150px;
        }
    }
    .anchor {
        font-size: 1rem;
        text-decoration: underline;
        color: inherit;
        &:hover {
            text-decoration: none;
        }
    }
    @media screen and (min-width: ${props => props?.theme?.breakpoints?.screenMdMin}) {
        padding: 125px 112px;
        @media screen and (min-width: ${props => props?.theme?.breakpoints?.screenWideMin}) {
            gap: 46px 0;
        }            
    }  
`;

export const Logo = styled.img`
    max-width: 100%;
`;

export const FieldGroup = styled.div`
    gap: 8px 0;
`;

export const Label = styled.label`
    color: white;
    font-size: 1rem;
    font-weight: 500;
`;

export const Error = styled.span`
    font-size: 0.875;
    color: ${props => props?.theme?.colorPalettes?.system?.error?.red500}
`;

export const Fieldset = styled.div`
    gap: 24px 0;
    @media screen and (min-width: ${props => props?.theme?.breakpoints?.screenWideMin}) {
        gap: 46px 0;
    }
    width: 100%;
`;

export const Input = styled.input`
    border-bottom: 1px white solid;
    @media screen and (min-width: ${props => props?.theme?.breakpoints?.screenSmMin}) {
        border: 1px white solid;
        border-radius: 4px;
    }
    padding: 6px 12px;
    color: white;
    width: 100%;
    font-size: 1.125rem;
    font-weight: 400;
    &::-ms-input-placeholder { /* Edge 12-18 */
        color: inherit;
    }
    &::placeholder {
        color: inherit;
    }    
    overflow: hidden;
    text-overflow: ellipsis;
`;