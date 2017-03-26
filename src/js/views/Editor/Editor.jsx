import React from 'react';
import { Row, Col, Tabs, Select } from 'antd';
import TextEditor from './containers/TextEditor.container';
import { themes, fontSizes } from 'js/components/TextEditor/options';

const TabPane = Tabs.TabPane;
const Option = Select.Option;

export default class Editor extends React.Component {

  constructor(props) {
    super(props);
    this.handleChangeTheme = this.handleChangeTheme.bind(this);
    this.handleChangeFontSize = this.handleChangeFontSize.bind(this);
  }

  handleChangeTheme(theme) {
    this.props.changeTextEditorTheme(theme);
  }

  handleChangeFontSize(fontSize) {
    this.props.changeFontSize(fontSize);
  }

  render() {

    return (
      <Row gutter={8}>
        <Col span={6}>
        </Col>
        <Col span={18}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Editor" key="1">
              <TextEditor />
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
            <TabPane tab="AST" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="Javascript" key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
        </Col>
      </Row>
    );
  }
}
