import React, { Component } from 'react';
import { Segment, Container } from 'semantic-ui-react';

export default class Profile extends Component {
  render() {
    return (
      <Segment placeholder>
        <Container text verticalAlign="middle" stretched>
          This is the user's profile page, populated from Salesforce user info. Will need 
          state from redux.
        </Container>
      </Segment>
    )
  }
}