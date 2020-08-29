import React, { Component } from 'react';
import { Menu, Segment, Container, Dropdown, Grid, Button, Icon } from 'semantic-ui-react';


export default class Navbar extends Component {
  state = { 
    activeItem: 'home',
    dropDownOptions: [
      { key: 'news', value: 'news', text: 'News'},
      { key: 'img', value: 'img', text: 'Image'},
      { key: 'cust', value: 'cust', text: 'Custom'}
    ] 
  }

  handleItemClick = (e, { name }) => {
    this.setState({ 
      activeItem: name
    })
  }

  // function to set content in navbar if logged in
  isUserLoggedIn() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <a href="/auth/login">
            <Button primary animated="vertical">
              <Button.Content visible>Login</Button.Content>
              <Button.Content hidden>
                <Icon name="cloud" />
              </Button.Content>
            </Button>
          </a>
        );
      default:
        return (
          <Dropdown 
            placeholder="Select Content Type" 
            fluid 
            selection 
            options={this.state.dropDownOptions}
          />
        );
    }
  }

  // function to determine if we show the logout button
  showLogout() {
    if (this.props.auth) {
      return (
        <Menu.Item link="/auth/logout" position="right">
            <Button primary animated="vertical">
              <Button.Content visible>logout</Button.Content>
              <Button.Content hidden>
                <Icon name="sign_out" />
              </Button.Content>
            </Button>
        </Menu.Item>
      )
    }
  }
  
  render() {
    const {activeItem} = this.state;

    return(
      <Segment>
        <Grid>
          <Grid.Column width="10">
            <Container>
              <Menu stackable>
                <Menu.Item
                  name='home'
                  active={activeItem === 'home'}
                  onClick={this.handleItemClick}
                ></Menu.Item>
                <Menu.Item
                  name='about'
                  active={activeItem === 'about'}
                  onClick={this.handleItemClick}
                ></Menu.Item>
                <Menu.Item
                  name='profile'
                  active={activeItem === 'profile'}
                  onClick={this.handleItemClick}
                ></Menu.Item>
                {this.showLogout}
              </Menu>
            </Container>
          </Grid.Column>
          <Grid.Column width="6">
            <Container textAlign="right">
              {this.isUserLoggedIn}
            </Container>
          </Grid.Column>  
        </Grid>
      </Segment>
    );
  }
}