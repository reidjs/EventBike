import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'
import { logout } from './util/session_api_util'
document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    // delete window.currentUser; UNCOMMENT AFTER DEVELOPMENT
  } else {
    store = configureStore();
  }
  window.store = store 
  window.dispatch = store.dispatch
  window.logout = logout
  ReactDOM.render(<Root store={store}/>, rootEl);
});