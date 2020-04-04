import styled, { css } from 'styled-components';
import searchIcon from '../../assets/images/icons/searchIcon.svg';

const Input = styled.input`
    color: ${({ theme }) => theme.fontColors.grayPrimary};
    line-height: 21px;
    padding: 10px 18px;
    max-width: 257px;
    width: 100%;
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
        `}
`;

export default Input;
