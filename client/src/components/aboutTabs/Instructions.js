import React, { Component } from 'react';
import { Segment, Container, Header, Icon } from 'semantic-ui-react';

export default class Instructions extends Component {
  render() {
    return (
      <Segment placeholder>
        <Container text verticalAlign="middle" stretched>
        <h2 class="ui header"><i aria-hidden="true" class="plug icon"></i><div class="content">How to Use This Tool</div></h2>
        </Container>
      </Segment>
    )
  }
}