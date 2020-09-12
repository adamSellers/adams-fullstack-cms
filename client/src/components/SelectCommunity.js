import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { fetchCommunities } from '../actions';

class SelectCommunity extends Component {

  componentDidMount() {
    console.log(`about to fire the props thingy, component did mount`);
    this.props.onFetchCommunities();
  }

  componentDidUpdate() {
    console.log(`component updated, are there props? ${JSON.stringify(this.state)}`);
  }
  render() {
    console.log(`are there data props?: ${JSON.stringify(this.state)}`);
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

const mapStateToProps = ({communities}) => {
  return { communities };
};

const mapDispatchToProps = (dispatch) => {
  return { onFetchCommunities: () => dispatch(fetchCommunities())}
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCommunity);