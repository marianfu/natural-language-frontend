import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { testAction } from '../../actions/test';
import { TextEditor, TextEditorListener } from '../TextEditor';

import TopBar from 'js/components/TopBar';

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

  render() {
    const themeOptions = [
      'monokai', 'tomorrow', 'github', 'kuroir', 'solarized_dark', 'solarized_light', 'xcode',
    ];

    return (
      <div className="App">
        <div>
          <TopBar/>
        </div>
        <br />
        <div>
          <select onChange={this.handleOnSelectTheme}>
            {themeOptions.map(this.renderThemeOption)}
          </select>
        </div>
        <div className="editor-position">
          <TextEditor theme={{ type: this.state.editorTheme, currentCode: this.state.code }} handleChangeCode={this.handleChangeCode} />
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
