import styled from 'styled-components';

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
`;

export default Input;
