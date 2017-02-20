import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { testAction } from '../../actions/test';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  componentDidMount() {
    const { testAction } = this.props;
    testAction();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    testAction: testAction
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
