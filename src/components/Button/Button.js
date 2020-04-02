import styled, { css } from 'styled-components';
import envelopeIcon from '../../assets/images/envelope.svg';

const Button = styled.button`
    background-color: #d65a31;
    border: none;
    border-radius: 5px;
    color: #eeeeee;
    height: 41px;
    padding: 10px 20px;

    ${({ gray2 }) =>
        gray2 &&
        css`
            background-color: #5d6167;
        `}

    ${({ gray4 }) =>
        gray4 &&
        css`
            background-color: #222831;
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
