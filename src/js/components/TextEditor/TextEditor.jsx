import React from 'react';
import AceEditor from 'react-ace';
import { debounce } from 'lodash';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
import 'brace/theme/tomorrow';
import 'brace/theme/github';
import 'brace/theme/kuroir';
import 'brace/theme/solarized_dark';
import 'brace/theme/xcode';

export const defaultOptions = {
  value: '',
  mode: 'javascript',
  theme: 'monokai',
  fontSize: '13px',
  tabSize: ''
};

class TextEditor extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = debounce(this.handleChange.bind(this), 500);
  }

  static propTypes = {
    value: React.PropTypes.string,
    mode: React.PropTypes.string,
    theme: React.PropTypes.string,
    fontSize: React.PropTypes.string,
    onChange: React.PropTypes.func,
  }

  static defaultProps = {
    ...defaultOptions
  }

  renderThemeOption = (theme) => {
    return (<option key={theme} value={theme}>{theme}</option>);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props) {
      return true;
    }
    return false;
  }

  handleChange(value) {
    this.props.onChange(value);
  }

  render() {
    const themeOptions = [
      'monokai', 'tomorrow', 'github', 'kuroir', 'solarized_dark', 'xcode',
    ];

    return (
      <div>
        <AceEditor
          value={this.props.value}
          className={this.props.className}
          readOnly={this.props.readOnly}
          width='auto'
          height={this.props.height}
          fontSize={this.props.fontSize}
          mode={this.props.mode}
          theme={this.props.theme}
          onChange={this.handleChange}
          name="text_editor"
          showPrintMargin={false}
          editorProps={{ $blockScrolling: true }}
        />
      </div>
    );
  }
}

export default TextEditor;