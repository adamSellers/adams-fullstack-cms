import React, { Component } from 'react';
import { Segment, Container } from 'semantic-ui-react';

export default class Installation extends Component {
  render() {
    return (
      <Segment placeholder>
        <Container text verticalAlign="middle" stretched>
          Installation instructions go here.
        </Container>
      </Segment>
    )
  }
}