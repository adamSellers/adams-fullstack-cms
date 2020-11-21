import React, { Component } from 'react';
import { Segment, Container, Header, Icon, Image } from 'semantic-ui-react';

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
          <p>
            This CMS Showcase will search for content that has been published from your Salesforce CMS system, using the content delivery
            API. Details on the implementation of this API can be found <a href="https://developer.salesforce.com/docs/atlas.en-us.chatterapi.meta/chatterapi/connect_resources_managed_content_resources.htm">
              here
            </a>.

          </p>
          <Container text verticalAlign="middle" stretched>
            <Header as='h4'>
              Salesforce Setup
            </Header>
            <p>
              Salesforce CMS is a unified shared service for all of Salesforce. What does that mean, exactly? It means that you can create content and extend it to any channel built on Salesforce, 
              such as a commerce site, a marketing email, a customer community, or a partner portal. What’s more, you can use the same content on channels outside of Salesforce, and it's this 
              headless feature that this site is designed to showcase. 
            </p>
            <p>
              <Image floated="left" src="/cms_badge.png" />
              In order to display information from Salesforce, you must first ensure you've setup the CMS with some available channels. Those channels must have content of type
              news (standard content type delivered with Salesforce CMS) as this app is (currently) set to only display a single content type. This may change at some point
              in the future, but certainly not today. To get started with setting up CMS in your org, head over to Trailhead and complete the 
              <a href="https://trailhead.salesforce.com/en/content/learn/modules/salesforce-cms-basics">CMS Module</a>. <br />
              It's important to note, that your Salesforce Org already has CMS included as a freemium offering - enough for you to get started on your Salesforce CMS journey today. <br />
            </p>
          </Container>
          <Container text verticalAlign="middle" stretched>
            <Header as='h4'>
              Working in this app
            </Header>
            <p>
              To get started, simply login with the button in the header above. This will take you to a Salesforce login screen, use your Salesforce credentials to login and
              you'll be returned to the app. This is an implementation of Salesforce Identity, a technology that allows us to use a Salesforce Org as a cloud IDP (Identity Provier)
              to store and manage user details and session information as required. 
            </p>
            <p>
              <Image floated="right" src="/dropdown.png" />
              Once logged in, you will see a prompt on the home page asking for you to select an available channel. If there are no records in your dropdown list in the header, then 
              check your Salesforce CMS setup to ensure you have published at least one channel. It's typical that you might publish a community with the Salesforce Experience Cloud that
              will also create a channel of the same name - although this isn't strictly necessay. Selecting your channel from the dropdown will display the available content for that
              channel. Again, if you don't see content, check that you have added content (of type news) to that specific channel and that your content items have been published. Today, 
              there is no support for externally hosted image sources (like AWS S3 for example) although that may be added in the future. But, for now, be sure to add your images in any 
              news articles as Salesforce Content as well. 
            </p>
          </Container>
          <Container text verticalAlign="middle" stretched>
            <Header as='h4'>
              This All Seems Great, but Why?
            </Header>
            <p>
              This app has been created as a proof of concept implementation of running Salesforce CMS in headless mode. If you're interested in how this is done, check the installation 
              tab where you'll find details on how to host your own version as well as links to the github repository for a look at the code. Happy hacking!
            </p>
          </Container>
        </Container>
      </Segment>
    )
  }
}