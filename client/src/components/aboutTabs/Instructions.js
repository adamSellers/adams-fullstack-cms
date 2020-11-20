import React, { Component } from 'react';
import { Segment, Container, Header, Icon } from 'semantic-ui-react';

export default class Instructions extends Component {
  render() {
    return (
      <Segment placeholder>
        <Container text verticalAlign="middle" stretched>
          <Header as='h2'>
            <Icon name='plug' />
            <Header.Content>
              How to Use This Tool
            </Header.Content>
          </Header>
        </Container>
      </Segment>
    )
  }
}