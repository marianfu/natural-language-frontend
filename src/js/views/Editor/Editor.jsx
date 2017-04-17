import React from 'react';
import TextEditor from 'js/components/TextEditor';
import { themes, fontSizes } from 'js/components/TextEditor/options';
import { Row, Col, Card } from 'antd';
import OptionsBar from './components/OptionsBar';
import pseudo from 'pseudo-js';
import './styles.scss';

export default class Editor extends React.Component {

  constructor(props) {
    super(props);

    var text = 'lista es [1, 2, 3, 4]\n\npor cada valor en lista {\n\tsi valor igual 2 {\n\t\tmostrar(2)\n\t} sino si valor > 2 {\n\t\tmostrar(valor)\n\t}\n}';
    this.state = {
      text: text,
      javascript: pseudo.compileToJS(text),
      ast: JSON.stringify(pseudo.compileToSyntaxTree(text), null, '\t')
    }
    this.handleChangeTheme = this.handleChangeTheme.bind(this);
    this.handleChangeFontSize = this.handleChangeFontSize.bind(this);
  }

  handleChangeTheme(theme) {
    this.props.changeTextEditorTheme(theme);
  }

  handleChangeFontSize(fontSize) {
    this.props.changeFontSize(fontSize);
  }

  handleChangeText = (text) => {
    var javascript = pseudo.compileToJS(text);
    var ast = JSON.stringify(pseudo.compileToSyntaxTree(text), null, '\t');
    this.setState((previousState) => {
      return {
        text,
        javascript,
        ast
      } 
    });
  }

  render() {
    return (
      <Row className="editorContainer">
        <Col span={6}>
          <Card className="card" title="Introduction" bordered={false}>
            <p>Instructions + possible tutorial goes here</p>
            <p>Instructions + possible tutorial goes here</p>
            <p>Instructions + possible tutorial goes here</p>
            <p>Instructions + possible tutorial goes here</p>
            <p>Instructions + possible tutorial goes here</p>
            <p>Instructions + possible tutorial goes here</p>
          </Card>
        </Col>
        <Col span={9}>
          <TextEditor className="editor" theme="chrome" mode="text" height='80vh' showGutter={false} value={this.state.text} onChange={this.handleChangeText} />
        </Col>
        <Col span={9}>
          <TextEditor className="editor" readOnly={true} mode="json" height='39vh' value={this.state.ast} />
          <TextEditor className="editor" readOnly={true} mode="javascript" height='39vh' value={this.state.javascript} />
        </Col>
      </Row>
    );
  }
}
