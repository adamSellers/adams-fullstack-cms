import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';

class SelectCommunity extends Component {

  componentDidMount() {
    console.log(JSON.stringify(this.props));
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