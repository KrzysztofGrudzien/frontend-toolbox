import styled from 'styled-components';

const Header = styled.h1`
    color: ${({ theme }) => theme.fontColors.grayPrimary};
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin: 0;
`;
export default Header;
