import React from 'react';
import { Row, Col, Tabs, Card } from 'antd';
import TextEditor from './containers/TextEditor.container';
import OptionsBar from './components/OptionsBar';

const TabPane = Tabs.TabPane;

export default class Editor extends React.Component {

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
              <TextEditor />
              <OptionsBar/>
            </TabPane>
            <TabPane tab="AST" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="Javascript" key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
        </Col>
      </Row>
    );
  }
}
