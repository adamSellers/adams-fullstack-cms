import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SelectCommunity extends Component {

  componentDidMount() {
    const testCall = this.props.fetchCommunities();
    console.log('Props: ' + JSON.stringify(this.props));
    console.log('testCall: ' + JSON.stringify(testCall));
  }
  render() {
    return (
      <Dropdown placeholder="select a community"></Dropdown>
    )
  };
};


export default connect(null, actions)(SelectCommunity);