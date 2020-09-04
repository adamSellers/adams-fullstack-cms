import React, { Component } from 'react';
import { Segment, Grid, Header, Icon, Dropdown } from 'semantic-ui-react';

export default class SelectContentType extends Component {
  render() {
    return(
      <Segment placeholder>
        <Grid stretched stackable textAlign="center" verticalAlign="middle">
          <Grid.Row>
            <Grid.Column stretched>
              <Header as="h2">
                <Icon name="settings" />
                <Header.Subheader>
                  Select your content type
                </Header.Subheader>
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column stretched>
              <Dropdown placeholder="Select Content Type fluid" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

    )
  };
}