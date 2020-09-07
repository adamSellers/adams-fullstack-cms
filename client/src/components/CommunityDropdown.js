import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown, Icon } from 'semantic-ui-react';

const dropdownOptions = [];

class CommunityDropdown extends Component {
  componentDidUpdate() {
    let stateArray = this.props.communities['communities'];
    for (let i = 0; i < stateArray.length; i ++ ) {
      if (stateArray[i].status === 'Live') {
        let itemToPush = {
          key: stateArray[i].id,
          value: stateArray[i].id,
          text: stateArray[i].name
        }
        dropdownOptions.push(itemToPush);
      }
    }
    console.log(`dropdown options should now be built: ${JSON.stringify(dropdownOptions)}`);
  }

  onDropdownChange = (e) => {
    console.log(`is there a value? ${e.target.value}`);
  }
  render() {
    return(
      <Dropdown 
        placeholder="select a community" 
        fluid
        search
        selection
        options={dropdownOptions}
        onChange={this.onDropdownChange(e)}
        />
    );
  };
}

function mapStateToProps({ communities }) {
  return ({ communities });
};

export default connect(mapStateToProps)(CommunityDropdown);