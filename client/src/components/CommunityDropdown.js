import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'; 

const dropdownOptions = [];

class CommunityDropdown extends Component {
  componentDidMount() {
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

  onDropdownChange = (data) => {
    console.log(`is there a value? ${data}`);
  }
  render() {
    return(
      <Dropdown 
        placeholder="select a community" 
        fluid
        search
        selection
        options={dropdownOptions}
        onChange={(data) => this.onDropdownChange(data)}
        />
    );
  };
}

function mapStateToProps({ communities }) {
  return ({ communities });
};

export default withRouter(connect(mapStateToProps)(CommunityDropdown));