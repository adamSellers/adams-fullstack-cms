import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown, Icon } from 'semantic-ui-react';


class CommunityDropdown extends Component {
  componentDidUpdate() {
    console.log(`are there props?: ${JSON.stringify(this.props.communities)}`);
    console.log(`is the community thing an array?: ${typeof(this.props.communities)}`);
  }
  render() {
    return(
      <Dropdown 
        placeholder="select a community" 
        fluid
        options={this.options}
        onChange={() => console.log(`on change selected, value is: ${this.options.value}`)}
        />
    );
  };
}

function mapStateToProps({ communities }) {
  return ({ communities });
};

export default connect(mapStateToProps)(CommunityDropdown);