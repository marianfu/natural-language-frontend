import React from 'react';
import TextEditor from 'js/components/TextEditor';
import Tabs from 'js/components/Tabs';
import LeftPanel from 'js/components/shared/LeftPanel';
import { Tab } from 'react-bootstrap';
import { Col, Grid, Row } from 'react-bootstrap';

export default class Editor extends React.Component {

  render() {
    return (
      <div>
        <Row className='show-grid'>
          <Col md={3} >
            <LeftPanel />
          </Col>
          <Col md={9} >
            <Tabs defaultTab={1}>
              <Tab eventKey={1} title="Editor">
                <TextEditor />
              </Tab>
              <Tab eventKey={2} title="AST">Tab 2 content</Tab>
              <Tab eventKey={3} title="Javascript">Tab 3 content</Tab>
            </Tabs>
          </Col>
        </Row>
      </div>
    );
  }
}