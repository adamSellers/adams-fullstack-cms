import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

export default class SelectCommunity extends Component {

  componentDidMount() {
    console.log(state);
    console.log(JSON.stringify(this.props));
  }
  render() {
    return (
      <Dropdown placeholder="select a community"></Dropdown>
    )
  };
};