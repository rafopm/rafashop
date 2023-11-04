'use client'

import { Provider } from 'react-redux';
import store from './store';

import { CookiesProvider } from 'react-cookie';

const Providers = ({ children }) => {
  return (

    <Provider store={store}>
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
        {children}
      </CookiesProvider>
    </Provider >

  );
};

export default Providers;