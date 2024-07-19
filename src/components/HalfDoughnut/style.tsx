import styled, {css, createGlobalStyle} from "styled-components";

interface TableTypo {
    feeling?: any;
}

export const Container = styled.article`
    padding: 8px;
    transition: 250ms ease-in-out all;
    &:hover {
        transform: scale(1.05)
    }
`;

export const Inner = styled.div`
    padding: 24px;
    border-radius: 8px;
    height: 100%;
    background: ${props => props?.theme?.colorPalettes?.tertiary?.purple1150};
    .echarts-for-react {
        margin-bottom: -100px;
        position: relative;
        z-index: 1;
        & ~ * {
            position: relative;
            z-index: 2;
        }
    }
`;

export const Title = styled.h3`
    color: white;
    font-size: 1.25rem;
    font-weight: 700;
`;

export const Table = styled.div`
    color: white;
`;

export const TableRow = styled.div`
    border-bottom: 2px rgba(255,255,255,.1) solid;
`;

export const Points = styled.span<TableTypo>`
    background: ${props => props?.theme?.colorPalettes?.system?.error?.red500};
    ${({ feeling }) => feeling && css`
        background: ${feeling == "Positiva" ? "#56F000" : "#FF3838"};
    `}     
    color: white;
    padding: 12px;
    border-radius: 2px;
`;

export const TableCell = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 10px;
`;

export const TableHead = styled.div`
    font-size: .75rem;
`;

export const TableBody = styled.div`
    font-size: .85rem;
    font-weight: 700;
`;

export const Text = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: inherit;
    margin: 0;
    a {
        color: inherit;
        &:hover {
            color: ${props => props?.theme?.colorPalettes?.primary?.yellow200};
        }
    }
`;