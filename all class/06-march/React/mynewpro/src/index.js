import React,{ StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( <StrictMode>  
<Auth0Provider
    domain="41pm.us.auth0.com"
    clientId="i9E0bLMnWdFbsriAwhtinqMs2VhdkIzt"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
</StrictMode>);

