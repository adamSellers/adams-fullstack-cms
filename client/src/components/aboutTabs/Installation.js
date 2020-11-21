import React, { Component } from 'react';
import { Header, Icon, Image, Container, Segment, List } from 'semantic-ui-react';

export default class Installation extends Component {
  render() {
    return (
      <Container text verticalAlign="middle" stretched>
        <Header as="h2">
          <Icon name="bug" />
          <Header.Content>
            Install a copy for yourself
          </Header.Content>
        </Header>
        <Segment>
          <Header as="h4">
            Technology
          </Header>
          This app uses a combination of technologies to deliver this headless CMS experience, technologies used:
          <List>
            <List.Item icon="cloud" content="Express + Node.js on the backend" />
            <List.Item icon="cloud" content="React on the frontend" />
            <List.Item icon="cloud" content="Salesforce for identity and CMS (of course)" />
            <List.Item icon="cloud" content="Redis" />
            <List.Item icon="cloud" content="MongoDB" />
            <List.Item icon="cloud" content="Hosted on Heroku" />
          </List>
        </Segment>
        <Segment>
          <Header as="h4">
            Prerequisites
          </Header>
          While this app will work with your Salesforce org today (famous last words, but login and try it!), you may well want to build 
          and run a copy of this for yourself. Before mashing the Heroku button below (recommended), there are a few things that need to be 
          setup first.
          <List ordered>
            <List.Item>Create a Salesforce <a href="https://help.salesforce.com/articleView?id=connected_app_create.htm">Connected App</a>. This is required for the oAuth identity
            flows.</List.Item>
            <List.Item>You'll also need to create an account at MongoDB Atlas and <a href="https://docs.atlas.mongodb.com/tutorial/deploy-free-tier-cluster/">create a cluster</a>. 
            There's a free tier available, so you don't have to worry about that. Mongo removed it's addon from Heroku in November 2020 so we now have to use the Atlas service.</List.Item>
            <List.Item>Then deploy the app to Heroku using the button below and start configuring the service as needed.</List.Item>
          </List>
          <a href="https://heroku.com/deploy?template=https://github.com/adamSellers/adams-fullstack-cms">
            <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy" />
          </a>
        </Segment>
        <Segment>
          You may of course, just like to grab the code and have at it yourself. If that sounds like you, then head over to <a href="https://github.com/adamSellers/adams-fullstack-cms">Github</a> and 
          get cracking! Fork the repo and start building your own CMS experience today!
        </Segment>
      </Container>
    )
  }
}