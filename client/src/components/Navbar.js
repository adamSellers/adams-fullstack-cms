import React, { Component } from 'react';
import { Menu, Segment, Container, Dropdown, Grid, Button, Icon } from 'semantic-ui-react';


export default class Navbar extends Component {
  state = { 
    activeItem: 'home',
    isLoggedIn: 'false',
    dropDownOptions: [
      { key: 'news', value: 'news', text: 'News'},
      { key: 'img', value: 'img', text: 'Image'},
      { key: 'cust', value: 'cust', text: 'Custom'}
    ] 
  }

  handleItemClick = (e, { name }) => {
    this.setState({ 
      activeItem: name,
      isLoggedIn: !this.state.isLoggedIn
    })
  }
  
  render() {
    const {activeItem} = this.state;

    let navRender;
    if (this.state.isLoggedIn) {
      navRender = <Dropdown 
                    placeholder="Select Content Type" 
                    fluid 
                    selection 
                    options={this.state.dropDownOptions}
                  />
    } else {
      navRender = <Button primary animated="vertical">
        <Button.Content visible>Login</Button.Content>
        <Button.Content hidden>
          <Icon name="cloud" />
        </Button.Content>
      </Button>
    }

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
              </Menu>
            </Container>
          </Grid.Column>
          <Grid.Column width="6">
            <Container textAlign="right">
              {navRender}
            </Container>
          </Grid.Column>  
        </Grid>
      </Segment>
    );
  }
}