import styled, { css } from 'styled-components';
import envelopeIcon from '../../assets/images/icons/envelope.svg';

const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.additional};
    border: none;
    border-radius: 5px;
    color: ${({ theme }) => theme.fontColors.grayPrimary};
    height: 41px;
    font-size: ${({ theme }) => theme.fontSize.s};
    padding: 10px 20px;

    ${({ gray2 }) =>
        gray2 &&
        css`
            background-color: ${({ theme }) => theme.colors.tertiary};
        `}

    ${({ gray4 }) =>
        gray4 &&
        css`
            background-color: ${({ theme }) => theme.colors.primary};
        `}
    ${({ sendIcon }) =>
        sendIcon &&
        css`
            background-image: url(${envelopeIcon});
            background-position: center left;
            background-repeat: no-repeat;
            padding: 10px 35px;
            border-left: solid 10px #d65a31;
        `}
`;

export default Button;
