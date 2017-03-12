import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
// import PanelTab from './PanelTab';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class PanelTabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Instrucciones'
    }
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
        <Tab
          label='Instrucciones'
          value='instrucciones'
        >
          <div>
            <h2 style={styles.headline}>
             instrucciones
            </h2>
            <p>
              bbbbbbbbbbbbbbbbbbb
            </p>
          </div>
        </Tab>
        <Tab
          label='Instrucciones'
          value='instrucciones'
        >
          <div>
            <h2 style={styles.headline}>
              Instrucciones
            </h2>
            <p>
              aaaaaaaaaaaaaaaa
            </p>
          </div>
        </Tab>
      </Tabs>
    );
  }
}

export default PanelTabs;