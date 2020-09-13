import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { fetchCommunities } from '../actions';

class SelectCommunity extends Component {

  componentDidMount() {
    this.props.onFetchCommunities();
  }


  onDropdownChange(event, data) {
    console.log(`selected value is: ${data.value}`);
    console.log(`event type is: ${event.type}`);
    console.log(`event target is: ${event.target}`);
    console.log(`current target is: ${event.currentTarget}`);
  }

  render() {
    return (
    <Dropdown 
      options={this.props.communities.data}
      placeholder="Select a community"
      fluid
      selection
      loading={this.props.communities.isLoading}
      onChange={ (event, data) => this.onDropdownChange(event, data)}
    />
    )
  };
};

const mapStateToProps = ({communities}) => {
  return { communities };
};

const mapDispatchToProps = (dispatch) => {
  return { onFetchCommunities: () => dispatch(fetchCommunities()) }
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCommunity);