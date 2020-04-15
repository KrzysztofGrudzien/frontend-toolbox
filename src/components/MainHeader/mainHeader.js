import styled from 'styled-components';

const Header = styled.header`
    background-color: ${({ theme }) => theme.colors.primary};
    display: grid;
    grid-template-columns: 1fr 2fr 70px;
    align-items: center;
    padding: 30px 57px;
    width: calc(100% - 255px);
`;

export default Header;
