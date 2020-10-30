import React, { Component } from 'react';
import { Segment, Container } from 'semantic-ui-react';

export default class Team extends Component {
  render() {
    return (
      <Segment placeholder>
        <Container text verticalAlign="middle" stretched>
          Details on the team go here.
        </Container>
      </Segment>
    )
  }
}