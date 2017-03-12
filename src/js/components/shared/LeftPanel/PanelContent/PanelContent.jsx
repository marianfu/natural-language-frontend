import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

import './PanelContent.scss';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class PanelContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'tab1'
    };
  }

  handleChange = (tab) => {
    this.setState({
      activeTab: tab
    });
  }

  render() {
    return (
      <Tabs
        value={this.state.activeTab}
        onChange={this.handleChange}
      >
        <Tab label='Instrucciones' value='tab1'>
          <div>
            <h2 style={styles.headline}>Ejercicio</h2>
            <p>
              Test
              </p>
          </div>
        </Tab>
        <Tab label='Output' value='tab2'>
          <div>
            <h2 style={styles.headline}>Resultado de ejecución</h2>
            <p>
              Test
              </p>
          </div>
        </Tab>
      </Tabs>
    );
  }
}

export default PanelContent;