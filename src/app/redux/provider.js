'use client'
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import store from './store';


const Providers = ({ children }) => {
  return (
    <Auth0Provider
      domain="dev-71anfduatoh05h1n.us.auth0.com"
      clientId="qJyBTZV6iXNpR984LniOmE18jx18dHFE"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <Provider store={store}>
        {children}
      </Provider>
    </Auth0Provider>
  );
};


export default Providers;