import React from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';
import 'brace/theme/tomorrow';
import 'brace/theme/github';
import 'brace/theme/kuroir';
import 'brace/theme/solarized_dark';
import 'brace/theme/xcode';

class TextEditor extends React.Component {

    constructor(props) {
        super(props);
        
        this.onChange = this.onChange.bind(this);
    }

    onChange(newValue) {
        this.props.handleChangeCode(newValue);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.theme.type === this.props.theme.type) return false;
        return true;
    }

    render() {
        console.log(this.props.theme);
        return (
            <AceEditor 
                fontSize={13}
                ref="editor"
                mode="javascript"
                theme={this.props.theme.type}
                onChange={this.onChange}
                name="text_editor"
                editorProps={{ $blockScrolling: true }}
            />
        );
    }
}

export default TextEditor;