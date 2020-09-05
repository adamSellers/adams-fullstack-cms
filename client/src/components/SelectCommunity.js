import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SelectCommunity extends Component {

  componentDidMount() {
    this.props.fetchCommunities();
  }
  render() {
    return (
      <Dropdown placeholder="select a community"></Dropdown>
    )
  };
};

export default connect(null, actions)(SelectCommunity);