import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { fetchChannels, fetchContent, fetchUser } from '../actions';

class SelectChannel extends Component {

  componentDidMount() {
    this.props.onFetchChannels();
    this.props.onFetchUser();
  }


  onDropdownChange(event, data) {
    console.log(`selected value is: ${data['value']}`);
    // fire the action that will get the content for a particular channel id
    this.props.onFetchContent(data['value']);
  }

  render() {
    return (
    <Dropdown 
      options={this.props.channels.data}
      placeholder="Available Channels for Org"
      fluid
      selection
      loading={this.props.channels.isLoading}
      onChange={ (event, data) => this.onDropdownChange(event, data)}
    />
    )
  };
};

const mapStateToProps = ({channels, auth}) => {
  return { channels, auth };
};

const mapDispatchToProps = (dispatch) => {
  return { 
    onFetchChannels: () => dispatch(fetchChannels()),
    onFetchContent: (channelId) => dispatch(fetchContent(channelId)),
    onFetchUser: () => dispatch(fetchUser()) 
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectChannel);