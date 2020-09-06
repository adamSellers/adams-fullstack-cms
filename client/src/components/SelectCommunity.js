import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CommunityDropdown from './CommunityDropdown';

class SelectCommunity extends Component {

  componentDidMount() {
    this.props.fetchCommunities()
      .then( console.log(`props in Select Community: ${JSON.stringify(this.props)}`));
  }
  render() {
    return (
      <CommunityDropdown />
    )
  };
};

export default connect(null, actions)(SelectCommunity);