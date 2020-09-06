import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown, Icon } from 'semantic-ui-react';


class CommunityDropdown extends Component {
  componentDidUpdate() {
    console.log(`are there props?: ${JSON.stringify(this.props.communities)}`);
    const options = this.props.communities.map(community => {
      return {
        key: community.id,
        text: community.name,
        value: community.id
      }
    });
  }
  render() {
    return(
      <Dropdown 
        placeholder="select a community" 
        fluid
        options={this.options}
        onChange={() => console.log(`on change selected, value is: ${options.value}`)}
        />
    );
  };
}

function mapStateToProps({ communities }) {
  return ({ communities });
};

export default connect(mapStateToProps)(CommunityDropdown);