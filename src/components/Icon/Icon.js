import styled, { css } from 'styled-components';
import envelopeIcon from '../../assets/images/icons/envelope.svg';
import calculatorIcon from '../../assets/images/icons/calculator.svg';
import copyIcon from '../../assets/images/icons/copy.svg';
import homeIcon from '../../assets/images/icons/home.svg';
import imageIcon from '../../assets/images/icons/image.svg';
import paperIcon from '../../assets/images/icons/paper.svg';

const Icon = styled.span`
    background: ${({ theme }) => theme.colors.additional};
    border-radius: 5px;
    display: inline-block;
    height: 41px;
    width: 41px;

    ${({ envelope }) =>
        envelope &&
        css`
            background: ${({ theme }) => theme.colors.additional} url(${envelopeIcon});
            background-position: 50% 50%;
            background-repeat: no-repeat;
        `}
    ${({ image }) =>
        image &&
        css`
            background: ${({ theme }) => theme.colors.additional} url(${imageIcon});
            background-position: 50% 50%;
            background-repeat: no-repeat;
        `}
    ${({ paper }) =>
        paper &&
        css`
            background: ${({ theme }) => theme.colors.additional} url(${paperIcon});
            background-position: 50% 50%;
            background-repeat: no-repeat;
        `}
    ${({ copy }) =>
        copy &&
        css`
            background: ${({ theme }) => theme.colors.additional} url(${copyIcon});
            background-position: 50% 50%;
            background-repeat: no-repeat;
        `}
    ${({ calculator }) =>
        calculator &&
        css`
            background: ${({ theme }) => theme.colors.additional} url(${calculatorIcon});
            background-position: 50% 50%;
            background-repeat: no-repeat;
        `}
    ${({ home }) =>
        home &&
        css`
            background: ${({ theme }) => theme.colors.additional} url(${homeIcon});
            background-position: 50% 50%;
            background-repeat: no-repeat;
        `}
`;

export default Icon;
