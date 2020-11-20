import React, { Component } from 'react';
import { Segment, Container } from 'semantic-ui-react';

export default class Instructions extends Component {
  render() {
    return (
      <Segment placeholder>
        <Container text verticalAlign="middle" stretched>
          Details on how to use this tool go here.
        </Container>
      </Segment>
    )
  }
}