import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
//import * as actions from '../actions';

class SelectCommunity extends Component {

  componentDidMount() {
    console.log('Props: ' + JSON.stringify(this.props.communities));
  }
  render() {
    return (
      <Dropdown placeholder="select a community"></Dropdown>
    )
  };
};

function mapStateToProps({ communities }) {
  return { communities };
}

export default connect(mapStateToProps)(SelectCommunity);