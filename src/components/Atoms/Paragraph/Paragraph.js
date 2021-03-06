import styled, { css } from 'styled-components';

const Paragraph = styled.p`
    font-weight: ${({ theme }) => theme.weigth.regular};
    color: ${({ theme }) => theme.fontColors.grayPrimary};
    margin: 0;

    ${({ large }) =>
        large &&
        css`
            font-size: ${({ theme }) => theme.fontSize.l};
        `}

    ${({ secondary }) =>
        secondary &&
        css`
            font-size: ${({ theme }) => theme.fontSize.s};
            font-weight: ${({ theme }) => theme.weigth.regular};
        `}
    ${({ caption }) =>
        caption &&
        css`
            font-size: ${({ theme }) => theme.fontSize.xxs};
            font-weight: ${({ theme }) => theme.weigth.medium};
        `}
    ${({ tertiary }) =>
        tertiary &&
        css`
            font-size: ${({ theme }) => theme.fontSize.xs};
            font-weight: ${({ theme }) => theme.weigth.bold};
        `}
    ${({ caps }) =>
        caps &&
        css`
            text-transform: uppercase;
        `}
`;

export default Paragraph;
