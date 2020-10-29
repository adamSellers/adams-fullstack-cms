import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { fetchCommunities, fetchContentType } from '../actions';
import _ from 'lodash';

class SelectCommunity extends Component {

  componentDidMount() {
    if (!_.isEmpty(this.props.auth.data)) {
    this.props.onFetchCommunities();
    }
  }


  onDropdownChange(event, data) {
    console.log(`selected value is: ${data['value']}`);
    this.props.onFetchContentType(data['value']);
  }

  render() {
    return (
    <Dropdown 
      options={this.props.communities.data}
      placeholder="Select a community"
      fluid
      selection
      loading={this.props.communities.isLoading  || false }
      onChange={ (event, data) => this.onDropdownChange(event, data)}
    />
    )
  };
};

const mapStateToProps = ({communities, auth}) => {
  return { communities, auth };
};

const mapDispatchToProps = (dispatch) => {
  return { 
    onFetchCommunities: () => dispatch(fetchCommunities()),
    onFetchContentType: (networkdId) => dispatch(fetchContentType(networkdId)) 
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCommunity);