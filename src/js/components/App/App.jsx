import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { random } from 'lodash';
import { testAction } from '../../actions/test';
import { TextEditor, TextEditorListener } from '../TextEditor';

import TopBar from 'js/components/TopBar';
import Button from 'js/components/shared/Button';

import './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      code: '',
      editorTheme: 'monokai',
    };

    this.handleChangeCode = this.handleChangeCode.bind(this);
    this.handleOnSelectTheme = this.handleOnSelectTheme.bind(this);
    this.evaluateCode = this.evaluateCode.bind(this);
    this.changeEditorTheme = this.changeEditorTheme.bind(this);
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
  }

  render() {
    const themeOptions = [
      'monokai', 'tomorrow', 'github', 'kuroir', 'solarized_dark', 'xcode',
    ];

    return (
      <div className="no-padding">
        <div>
          <TopBar />
        </div>
        <div>
          <select onChange={this.handleOnSelectTheme}>
            {themeOptions.map(this.renderThemeOption)}
          </select>
        </div>
        <div className="col s12 row no-padding">
          <div className="col s3 no-padding">
            <p >test</p>
          </div>
          <div ref="parent" className="col s9 no-padding">
            <TextEditor
              code={this.state.code}
              theme={{ type: this.state.editorTheme, currentCode: this.state.code }}
              handleChangeCode={this.handleChangeCode}
            />
            {/*<TextEditorListener code={this.state.code} />*/}
          </div>
        </div>
        <div>
          <Button onClick={this.evaluateCode} title="test" color="purple darken-4" />
          <Button onClick={this.changeEditorTheme} title="Random Theme" />
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
