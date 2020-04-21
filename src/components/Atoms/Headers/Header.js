import styled from 'styled-components';

const Header = styled.h1`
    color: ${({ theme }) => theme.fontColors.grayPrimary};
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin: 0;
    line-height: 7.2rem;
`;
export default Header;
