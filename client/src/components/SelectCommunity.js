import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CommunityDropdown from './CommunityDropdown';

class SelectCommunity extends Component {

  componentDidMount() {
    this.props.fetchCommunities();
  }
  render() {
    return (
      <CommunityDropdown />
    )
  };
};

export default connect(null, actions)(SelectCommunity);