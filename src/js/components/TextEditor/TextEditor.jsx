import React from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

class TextEditor extends React.Component {

    constructor(props) {
        super(props);
        
        this.onChange = this.onChange.bind(this);
    }

    onChange(newValue) {
        this.props.handleChangeCode(newValue);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        return (
            <AceEditor 
                ref="editor"
                mode="javascript"
                theme="monokai"
                onChange={this.onChange}
                name="text_editor"
                editorProps={{ $blockScrolling: true }}
            />
        );
    }
}

export default TextEditor;