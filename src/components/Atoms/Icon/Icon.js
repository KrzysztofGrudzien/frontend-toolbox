import styled, { css } from 'styled-components';
import envelopeIcon from '../../../assets/images/icons/envelope.svg';
import calculatorIcon from '../../../assets/images/icons/calculator.svg';
import homeIcon from '../../../assets/images/icons/home.svg';
import imageIcon from '../../../assets/images/icons/image.svg';
import paperIcon from '../../../assets/images/icons/paper.svg';
import userIcon from '../../../assets/images/icons/user.svg';
import logoIcon from '../../../assets/images/icons/logo.svg';
import logoTitleIcon from '../../../assets/images/icons/logoTitle.svg';

const Icon = styled.span`
    background: null;
    border-radius: 5px;
    display: inline-block;
    height: 41px;
    width: 41px;
    
    ${({ envelope }) =>
        envelope &&
        css`
            background: url(${envelopeIcon});
            background-position: 50% 50%;
            background-repeat: no-repeat;
        `}
    ${({ image }) =>
        image &&
        css`
            background: url(${imageIcon});
            background-position: 50% 50%;
            background-repeat: no-repeat;
        `}
    ${({ paper }) =>
        paper &&
        css`
            background: url(${paperIcon});
            background-position: 50% 50%;
            background-repeat: no-repeat;
        `}
    ${({ calculator }) =>
        calculator &&
        css`
            background: url(${calculatorIcon});
            background-position: 50% 50%;
            background-repeat: no-repeat;
        `}
    ${({ home }) =>
        home &&
        css`
            background: url(${homeIcon});
            background-position: 50% 50%;
            background-repeat: no-repeat;
        `}
    ${({ user }) =>
        user &&
        css`
            background: url(${userIcon});
            background-position: 50% 50%;
            background-repeat: no-repeat;
            justify-self: end;
            display: inline-block;
            height: 50px;
            width: 50px;
        `}
    ${({ logo }) =>
        logo &&
        css`
            background: url(${logoIcon});
            background-position: 50% 50%;
            background-repeat: no-repeat;
            border-radius: none;
            display: inline-block;
            height: 55px;
            width: 55px;
        `}
    ${({ logoTitle }) =>
        logoTitle &&
        css`
            background: url(${logoTitleIcon});
            background-position: 50% 50%;
            background-repeat: no-repeat;
            border-radius: none;
            display: inline-block;
            min-width: 205px;
            height: 55px;
        `}

`;

export default Icon;
