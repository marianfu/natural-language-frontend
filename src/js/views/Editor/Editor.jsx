import React from 'react';
import { Row, Col, Tabs, Select } from 'antd';
import TextEditor from 'js/components/TextEditor/TextEditor';
import { themes, fontSizes } from 'js/components/TextEditor/options';
// import { compileToPseudocode } from 'prose-js';
import pseudo from 'pseudo-js';

const TabPane = Tabs.TabPane;
const Option = Select.Option;

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
        </Col>
        <Col span={18}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Editor" key="1">
              <TextEditor mode="text" value={this.state.text} onChange={this.handleChangeText} />
              <div>
                <Select defaultValue="monokai" style={{ width: 120 }} onChange={this.handleChangeTheme}>
                  {themes.map((theme, index) =>
                    <Option key={index} value={theme}>{theme}</Option>
                  )}
                </Select>
                <Select defaultValue="13px" style={{ width: 120 }} onChange={this.handleChangeFontSize}>
                  {fontSizes.map((fontSize, index) =>
                    <Option key={index} value={fontSize}>{fontSize}</Option>
                  )}
                </Select>
              </div>
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
