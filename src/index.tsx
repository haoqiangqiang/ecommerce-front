import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import './style.css'
import Routes from './router';
import store, { history } from './store';
import AnotherStore from './anotherStore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AnotherStore>
        <Routes />
      </AnotherStore>
    </ConnectedRouter>
  </Provider>
);
