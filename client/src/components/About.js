import React, { Component } from 'react';
import { Segment, Container } from 'semantic-ui-react';

export default class About extends Component {
  render() {
    return (
      <Segment placeholder>
        <Container text verticalAlign="middle" stretched>
          This is the about page, will put details of the team and installation instructions in here.
        </Container>
      </Segment>
    )
  }
}