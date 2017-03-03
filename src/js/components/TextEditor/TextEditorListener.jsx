import React from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

class TextEditorListener extends React.Component {

  render() {
    return (
      <AceEditor
        mode="javascript"
        theme="monokai"
        onChange={this.onChange}
        name="UNIQUE_ID_OF_DIV"
        value={this.props.code}
        editorProps={{ $blockScrolling: true }}
      />
    );
  }
}

export default TextEditorListener;