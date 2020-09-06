import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown, Icon } from 'semantic-ui-react';


class CommunityDropdown extends Component {
  componentDidUpdate() {
    console.log(`is this bit an array: ${Array.isArray(this.props.communities)}`);
    let dropdownOptions = [];
    for (let i in this.props.communities) {
      dropdownOptions.push(this.props.communities[i]);
    }

    console.log(`the dropdown options are: ${this.dropdownOptions}`);
  }
  render() {
    return(
      <Dropdown 
        placeholder="select a community" 
        fluid
        search
        selection
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