import React from 'react';
import PanelContent from './PanelContent';
import { Tabs, Tab } from 'material-ui/Tabs';

import './LeftPanel.scss';

class LeftPanel extends React.Component {

  render() {
    return (
      <div>
        <PanelContent />
      </div>
    );
  }
}

export default LeftPanel;