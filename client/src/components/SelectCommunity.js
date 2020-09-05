import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

export default class SelectCommunity extends Component {

  componentDidMount() {
    let comms = this.props.fetchCommunities();
    // see if we can console log this out
    console.log(JSON.stringify(comms));
  }
  render() {
    return (
      <Dropdown placeholder="select a community"></Dropdown>
    )
  };
};