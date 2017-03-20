
import React from 'react';
import { Tabs as BootTabs } from 'react-bootstrap';

import './styles.scss';

export default class Tabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.defaultTab
    };
  }

  setActiveTab = (tabId) => {
    console.log(tabId)
    this.setState({
      activeTab: tabId
    });
  };

  render() {
    return (
      <BootTabs className='tabs'
        onSelect={this.setActiveTab}
        defaultActiveKey={this.state.activeTab}
        id="uncontrolled-tab-example"
      >
        {this.props.children}
      </BootTabs>
    );
  }
}

Tabs.propTypes = {
  defaultTab: React.PropTypes.number,
};

Tabs.defaultProps = {
  defaultTab: 1
};