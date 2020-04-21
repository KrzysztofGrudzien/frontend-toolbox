import React from 'react';
import styled from 'styled-components';
import Header from '../../Atoms/Headers/Header';
import Paragraph from '../../Atoms/Paragraph/Paragraph';

const StyledTitleWrapper = styled.div`
    margin-bottom: 3.2rem;
`;

const PageTitle = () => (
    <StyledTitleWrapper>
        <Header>Hello Krzysztof</Header>
        <Paragraph>
            Your quote for today is: “Convallis quisque quam sociis aliquam eu enim ipsum. Facilisis
            sagittis tincidun.”
        </Paragraph>
    </StyledTitleWrapper>
);

export default PageTitle;
