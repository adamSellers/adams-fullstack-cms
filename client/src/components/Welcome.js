import React, {Component} from 'react';
import {Segment, Container, Header, Divider} from 'semantic-ui-react';

export default class Welcome extends Component {
  render() {
    return (
      <Segment placeholder>
        <Container text verticalAlign="middle" stretched>
          <Header as='h1'>Salesforce CMS Showcase</Header>
          <Container text>
            Thanks for visiting! This is an example application to showcase the 
            Salesforce CMS platform running in headless mode. This app, written 
            in React, will consume the Content Delivery API from Salesforce and 
            import content based on the content type selected above. We hope you enjoy it! 
          </Container>
          <Divider />
          <Header as='h3'>Getting Started</Header>
          <Container text>
            To get started, simply login above with your Salesforce credentials of the org
            that is managing your content. Then select the content type that you wish to sync out 
            and watch the magic happen. Updating your content in the SF org will be reflected 
            in near real time with a simple refresh of the page. Happy demo's everyone :)
          </Container>
        </Container>
      </Segment>
    )
  }
}