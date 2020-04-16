import React from 'react';
import Header from './mainHeader';
import Paragraph from '../../Atoms/Paragraph/Paragraph';
import Search from '../../Atoms/Input/Input';
import Icon from '../../Atoms/Icon/Icon';

export default { title: 'Molecules/mainHeader' };
const today = new Date();
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const formattedDate = `
        ${day[today.getDay()]}   ${today.getDate()}   ${
    months[today.getMonth()]
},  ${today.getFullYear()}`;
export const MainHeader = () => (
    <Header>
        <Paragraph secondary>{formattedDate}</Paragraph>
        <Search search placeholder="Search" />
        <Icon user />
    </Header>
);
