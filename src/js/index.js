import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';
import store from './store';
import App from './app';
import Sandbox from './views/Sandbox';
import Editor from './views/Editor';
import Home from './views/Home';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/learn" component={Editor} />
        <Route path="/docs" component={Sandbox} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
