import React, { Component } from 'react';
import { Segment, Container, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    return (
      <Segment placeholder>
        <Container text verticalAlign="middle" stretched>
          This is the user's profile page, populated from Salesforce user info. Will need 
          state from redux.
          <Divider />
          We'll show this content:
          {this.props.auth}
        </Container>
      </Segment>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Profile);