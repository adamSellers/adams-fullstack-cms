import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown, Icon } from 'semantic-ui-react';
import { json } from 'body-parser';


class CommunityDropdown extends Component {
  dropdownOptions = this.props.communities;
  
  componentDidUpdate() {
    console.log(`is this bit an array: ${Array.isArray(this.props.communities['communities'])}`);
    console.log(`as props.communities: ${JSON.stringify(this.props.communities)}`);
    console.log(`as dropdown options: ${JSON.stringify(this.dropdownOptions)}`);
    
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