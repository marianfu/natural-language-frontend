import React from 'react';
import { Tab } from 'material-ui/Tabs';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class PanelTab extends React.Component {

  render() {
    return (
      <Tab
        label={this.props.label}
        value={this.props.label}
      >
        <div>
          <h2 style={styles.headline}>
            {this.props.header}
          </h2>
          <p>
            {this.props.content}
          </p>
        </div>
      </Tab>
    );
  }
}

PanelTab.propTypes = {
  label: React.PropTypes.string,
  header: React.PropTypes.string,
  content: React.PropTypes.string,
}

export default PanelTab;