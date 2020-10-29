import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { fetchCommunities, fetchContentType } from '../actions';

class SelectCommunity extends Component {

  componentDidMount() {
    this.props.onFetchCommunities();
  }


  onDropdownChange(event, data) {
    console.log(`selected value is: ${data['value']}`);
    // fire the action that will get the content for a particular community id
    this.props.onFetchContentType(data['value']);
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
  return { 
    onFetchCommunities: () => dispatch(fetchCommunities()),
    onFetchContentType: (networkdId) => dispatch(fetchContentType(networkdId)) 
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCommunity);