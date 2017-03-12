import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { once } from 'lodash';

import App from './components/App';
import store from './store';

injectTapEventPlugin();

import '../styles/grid/css/foundation.css';

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
