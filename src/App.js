// import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import { store } from './app/store';
import MainLayout from './page/mainLayout/MainLayout';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={createBrowserHistory()}>
        <Switch>
          <MainLayout />
        </Switch>
      </Router>
    </Provider>
  );
}
// export default hot(App);