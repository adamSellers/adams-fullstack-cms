import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { fetchCommunities } from '../actions';

class SelectCommunity extends Component {

  componentDidMount() {
    console.log(`about to fire the props thingy, component did mount`);
    this.props.onFetchCommunities();
  }
  render() {
    return (
    <Dropdown 
      options={this.props.data}
      placeholder="Select a community"
      fluid
      selection
      loading={this.props.loading}
    />
    )
  };
};

const mapStateToProps = (state) => {
  return { isLoading: state.isLoading, data: state.data, error: state.error }
};

const mapDispatchToProps = (dispatch) => {
  return { onFetchCommunities: () => dispatch(fetchCommunities())}
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCommunity);