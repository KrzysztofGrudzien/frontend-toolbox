import styled, { css } from 'styled-components';
import searchIcon from '../../assets/images/icons/searchIcon.svg';
import dropDownIcon from '../../assets/images/icons/dropDownIcon.svg';

const Input = styled.input`
    color: ${({ theme }) => theme.fontColors.grayPrimary};
    line-height: 21px;
    padding: 10px 18px;
    max-width: 257px;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.weigth.medium};
    background-color: ${({ theme }) => theme.colors.secondary};
    border: none;
    border-radius: 4px;

    ::placeholder {
        color: ${({ theme }) => theme.fontColors.gray60};
        font-size: ${({ theme }) => theme.fontSize.s};
        font-weight: ${({ theme }) => theme.weigth.medium};
    }

    ${({ search }) =>
        search &&
        css`
            background-image: url(${searchIcon});
            background-position: right 16px bottom 50%;
            background-repeat: no-repeat;
            justify-self: end;
        `};

    ${({ small }) =>
        small &&
        css`
            max-width: 60px;
            text-align: center;
        `}

    ${({ medium }) =>
        medium &&
        css`
            max-width: 168px;
        `}

    ${({ large }) =>
        large &&
        css`
            max-width: 274px;
        `}

    ${({ select }) =>
        select &&
        css`
            max-width: 168px;
            background-image: url(${dropDownIcon});
            background-repeat: no-repeat;
            background-position: right 8px bottom 50%;
        `}
`;

export default Input;
