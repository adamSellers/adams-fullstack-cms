import React, { Component } from 'react';
import { Segment, Grid, Container, Image, Menu } from 'semantic-ui-react';

export default class Footer extends Component {

  render() {
    return (
      <Segment inverted>
        <Grid stackable>
          <Grid.Column width="4">
            <Image src="/footerLogo.png" alt="Salesforce.org Architects"></Image>
          </Grid.Column>
          <Grid.Column width="8" textAlign="center" verticalAlign="middle">
            Proudly brought to you by the Salesforce.org Architect team.
          </Grid.Column>
          <Grid.Column width="4">
            <Menu inverted vertical>
              <Menu.Item>
                NPSP
              </Menu.Item>
              <Menu.Item>
                EDA
              </Menu.Item>
              <Menu.Item>
                NPSP
              </Menu.Item>
              <Menu.Item>
                GEM
              </Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}