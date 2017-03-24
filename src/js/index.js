import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import store from './store';
import App from './components/App';
import Sandbox from './views/Sandbox';
import HomePage from './views/HomePage';
import Editor from './views/Editor';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <Route path="home" component={HomePage} />
        <Route path="editor" component={Editor} />
        <Route path="sandbox" component={Sandbox} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
