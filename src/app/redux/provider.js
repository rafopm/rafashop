'use client'
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import store from './store';


const Providers = ({ children }) => {

  const redirectUri = typeof window !== 'undefined' ? window.location.origin : '';

  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_ID}
      authorizationParams={{
        redirect_uri: redirectUri
      }}
    >
      <Provider store={store}>
        {children}
      </Provider>
    </Auth0Provider>
  );
};

export default Providers;