import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown, Icon } from 'semantic-ui-react';


class CommunityDropdown extends Component {
  componentDidMount() {
    console.log(`are there props?: ${JSON.stringify(this.props.communities)}`);
  }
  render() {
    return(
      <Dropdown placeholder="select a community" fluid />
    );
  };
}

function mapStateToProps({ communities }) {
  return ({ communities });
};

export default connect(mapStateToProps)(CommunityDropdown);