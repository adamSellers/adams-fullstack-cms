import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown, Icon } from 'semantic-ui-react';


class CommunityDropdown extends Component {
  dropdownOptions = this.props.networks;
  
  componentDidUpdate() {
    console.log(`is this bit an array: ${Array.isArray(this.dropdownOptions)}`);
    
  }
  render() {
    return(
      <Dropdown 
        placeholder="select a community" 
        fluid
        search
        selection
        options={this.dropdownOptions}
        onChange={() => console.log(`on change selected, value is: ${this.dropdownOptions.value}`)}
        />
    );
  };
}

function mapStateToProps({ networks }) {
  return ({ networks });
};

export default connect(mapStateToProps)(CommunityDropdown);