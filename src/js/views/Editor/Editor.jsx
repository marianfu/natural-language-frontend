import React from 'react';
import TextEditor from 'js/components/TextEditor/TextEditor';
import { themes, fontSizes } from 'js/components/TextEditor/options';
import { Row, Col, Tabs, Card } from 'antd';
import OptionsBar from './components/OptionsBar';
import pseudo from 'pseudo-js';

const TabPane = Tabs.TabPane;

export default class Editor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      javascript: '',
      ast: ''
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
    var ast = JSON.stringify(pseudo.compileToSyntaxTree(text));
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
      <Row gutter={8}>
        <Col span={6}>
          <Card title="Instrucciones" >
            <p>test</p>
          </Card>
        </Col>
        <Col span={18}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Editor" key="1">
              <TextEditor mode="text" value={this.state.text} onChange={this.handleChangeText} />
              <OptionsBar/>
            </TabPane>
            <TabPane tab="AST" key="2">
              <TextEditor mode="json" value={this.state.ast} />
            </TabPane>
            <TabPane tab="Javascript" key="3">
              <TextEditor value={this.state.javascript} />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    );
  }
}
