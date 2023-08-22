import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './GlobalStyle';
import { ChakraBaseProvider } from '@chakra-ui/react';
import { theme } from './styles/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ChakraBaseProvider theme={theme}>
            <GlobalStyle />
            <App />
        </ChakraBaseProvider>
    </React.StrictMode>
);
