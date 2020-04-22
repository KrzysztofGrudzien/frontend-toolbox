import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../Atoms/Paragraph/Paragraph';
import Search from '../../Atoms/Input/Input';
import Icon from '../../Atoms/Icon/Icon';

const HeaderOne = styled.header`
    background-color: ${({ theme }) => theme.colors.primary};
    display: grid;
    grid-template-columns: 1fr 2fr 70px;
    align-items: center;
    padding: 30px 57px;
    width: calc(100% - 255px);
    margin-bottom: 3.2rem;
`;

const today = new Date();
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const formattedDate = `
        ${day[today.getDay()]}   ${today.getDate()}   ${
    months[today.getMonth()]
},  ${today.getFullYear()}`;
const Header = () => (
    <HeaderOne>
        <Paragraph secondary>{formattedDate}</Paragraph>
        <Search search placeholder="Search" />
        <Icon user />
    </HeaderOne>
);

export default Header;
