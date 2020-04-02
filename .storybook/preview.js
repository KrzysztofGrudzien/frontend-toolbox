import React from 'react';
import { addDecorator } from '@storybook/react';
import GlobalStyle from '../src/theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/mainTheme';

addDecorator((story) => (
    <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{story()}</ThemeProvider>
    </>
));
