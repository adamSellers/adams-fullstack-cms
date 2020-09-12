import React, { Component } from 'react';
import { Segment, Grid, Image, Menu } from 'semantic-ui-react';

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
          <Grid.Column width="4" textAlign="center">
            <Menu fluid inverted vertical>
              <Menu.Item>
                <a href="https://www.salesforce.org/nonprofit/nonprofit-success-pack/">NPSP</a>
              </Menu.Item>
              <Menu.Item>
                <a href="https://www.salesforce.org/highered/data-architecture/">EDA</a>
              </Menu.Item>
              <Menu.Item>
                <a href="https://www.salesforce.org/blog/gift-entry-manager-gem-for-higher-ed-advancement-now-available/">GEM</a>
              </Menu.Item>
              <Menu.Item>
                <a href="https://www.salesforce.org/power-of-us/">Power of Us</a>
              </Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}