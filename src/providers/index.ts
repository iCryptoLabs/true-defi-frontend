import { createRoot } from 'react-dom/client';

import MuiThemeProvider from './theme';
import ConfigProvider from './config';
import Web3ReactProvider from './web3React';
import APIProvider from './api';
import StoreProvider from './store';

import { ModalProvider } from 'components/Modal';
import { ToastsProvider } from 'contexts/ToastsContext';

const Root = createRoot(document.getElementById('app-root') as HTMLElement);

export {
    Root,
    MuiThemeProvider,
    ConfigProvider,
    StoreProvider,
    ToastsProvider,
    ModalProvider,
    Web3ReactProvider,
    APIProvider
};
