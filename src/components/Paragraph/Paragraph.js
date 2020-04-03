import styled, { css } from 'styled-components';

const Paragraph = styled.p`
    font-weight: 600;

    ${({ large }) =>
        large &&
        css`
            font-size: 2rem;
        `}

    ${({ secondary }) =>
        secondary &&
        css`
            font-size: 1.4rem;
        `}
    ${({ caption }) =>
        caption &&
        css`
            font-size: 1rem;
            font-weight: 500;
        `}
    ${({ tertiary }) =>
        tertiary &&
        css`
            font-size: 1.2rem;
            font-weight: 500;
        `}
`;

export default Paragraph;
