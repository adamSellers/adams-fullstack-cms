import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown, Icon } from 'semantic-ui-react';


class CommunityDropdown extends Component {
  dropdownOptions = [];
  
  componentDidUpdate() {
    console.log(`is this bit an array: ${Array.isArray(this.props.communities)}`);
    for (var i in this.props.communities) {
      console.log(`looping through and i is: ${JSON.stringify(i)}`);
      
    }
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

function mapStateToProps({ communities }) {
  return ({ communities });
};

export default connect(mapStateToProps)(CommunityDropdown);