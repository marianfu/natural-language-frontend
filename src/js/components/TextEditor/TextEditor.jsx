import React from 'react';
import AceEditor from 'react-ace';

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
  fontSize: '13',
  tabSize: ''
};

class TextEditor extends React.Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(newValue) {
    this.props.handleChangeCode(newValue);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if (nextProps.width !== this.props.width) {
    //   return true;
    // }
    if (nextProps.theme.type === this.props.theme.type) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    this.refs.editor.editor.setValue(this.props.code);
  }

  renderThemeOption(theme) {
    return (<option key={theme} value={theme}>{theme}</option>);
  }

  render() {
    const themeOptions = [
      'monokai', 'tomorrow', 'github', 'kuroir', 'solarized_dark', 'xcode',
    ];
    return (
      <AceEditor
        width='auto'
        fontSize={13}
        ref="editor"
        mode="javascript"
        theme={this.props.theme.type}
        onChange={this.onChange}
        name="text_editor"
        showPrintMargin={false}
        editorProps={{ $blockScrolling: true }}
      />
    );
  }
}

export default TextEditor;