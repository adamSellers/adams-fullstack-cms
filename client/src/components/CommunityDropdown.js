import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown, Icon } from 'semantic-ui-react';


class CommunityDropdown extends Component {
  componentDidUpdate() {
    const dropdownOptions = Object.keys(this.props.communities);
    console.log(`the options are now an array: ${Array.isArray(dropdownOptions)}`);
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