import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SelectCommunity extends Component {

  componentDidMount() {
    this.props.fetchCommunities();
  }
  render() {
    console.log(`are there community props?: ${JSON.stringify(this.props.communities)}`);
    return (
      <Dropdown placeholder="select a community"></Dropdown>
    )
  };
};

export default connect(null, actions)(SelectCommunity);