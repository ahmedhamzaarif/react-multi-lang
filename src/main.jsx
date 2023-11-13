import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
      domain='dev-jw6x1srloc5zljpc.us.auth0.com'
      clientId='pzn7uAJT8jyLbDpows8KW1G2q6Hw3P9Y'
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      >
        <App />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>,
)
