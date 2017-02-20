import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { testAction } from '../../actions/test';
import { TextEditor, TextEditorListener } from '../TextEditor';

import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      code: '' 
    };

    this.handleChangeCode = this.handleChangeCode.bind(this);
  }

  componentDidMount() {
    const { testAction } = this.props;
    testAction();
  }

  handleChangeCode(newValue) {
    this.setState({
      code: newValue
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Test editor</h2>
        </div>
        <div>
          <TextEditor handleChangeCode={this.handleChangeCode}/>
          <TextEditorListener code={this.state.code} />
        </div>
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
