import React from 'react';
import AceEditor from 'react-ace';
import className from 'classnames/bind';
import styles from 'styles/materialize/sass/materialize.scss';

import 'brace/mode/javascript';
import 'brace/theme/monokai';
import 'brace/theme/tomorrow';
import 'brace/theme/github';
import 'brace/theme/kuroir';
import 'brace/theme/solarized_dark';
import 'brace/theme/xcode';

let cx = className.bind(styles);

export const defaultOptions = {
  value: '',
  mode: 'javascript',
  theme: 'monokai',
  fontSize: '13',
  tabSize: ''
};

class TextEditor extends React.Component {

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

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.theme.type === this.props.theme.type) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    this.refs.editor.editor.setValue(this.props.code);
  }

  renderThemeOption = (theme) => {
    return (<option key={theme} value={theme}>{theme}</option>);
  }

  render() {
    const themeOptions = [
      'monokai', 'tomorrow', 'github', 'kuroir', 'solarized_dark', 'xcode',
    ];

    let btnClassName = cx({
      'btn': true
    });

    return (
      <div>
        <AceEditor
          width='auto'
          fontSize={13}
          mode="javascript"
          theme='monokai'
          onChange={this.props.onChange}
          name="text_editor"
          showPrintMargin={false}
          editorProps={{ $blockScrolling: true }}
        />
      </div>
    );
  }
}

export default TextEditor;