import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { random } from 'lodash';
import { changeTextEditorTheme, changeTextEditorValue } from 'js/components/TextEditor/actions';
import moment from 'moment';

import TextEditor from '../TextEditor';
import './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      code: '',
      editorTheme: 'monokai',
      lastTimeInput: moment()
    };

    this.handleChangeCode = this.handleChangeCode.bind(this);
    this.handleOnSelectTheme = this.handleOnSelectTheme.bind(this);
    this.evaluateCode = this.evaluateCode.bind(this);
    this.changeEditorTheme = this.changeEditorTheme.bind(this);
  }

  componentDidMount() {

  }

  handleChangeCode(newValue) {
    this.setState({
      code: newValue
    });
    const now = moment();
    if (now.diff(this.state.lastTimeInput, 'seconds') > 4) {
      this.props.changeTextEditorValue(newValue);
      this.setState({ lastTimeInput: moment() });
    }
  }

  renderThemeOption(theme) {
    return (<option key={theme} value={theme}>{theme}</option>);
  }

  handleOnSelectTheme(event) {
    const theme = event.target.value;
    this.setState({
      editorTheme: theme
    });
  }

  evaluateCode() {
    eval(this.state.code);
  }

  changeEditorTheme() {
    const themeOptions = [
      'monokai', 'tomorrow', 'github', 'kuroir', 'solarized_dark', 'xcode',
    ];
    const theme = themeOptions[random(0, themeOptions.length - 1)];
    this.setState({
      editorTheme: theme
    });
    this.props.changeTextEditorTheme(theme);
  }

  render() {

    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    changeTextEditorTheme,
    changeTextEditorValue
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);

