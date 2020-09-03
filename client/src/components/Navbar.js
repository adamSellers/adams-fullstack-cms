import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment, Container, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

import LoginButtonNav from './LoginButtonNav';
import LogoutButtonNav from './LogoutButtonNav';
import SelectCommunity from './SelectCommunity';

class Navbar extends Component {
  state = { 
    activeItem: 'home'
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
            <LoginButtonNav />
        );
      default:
        return (
          <LogoutButtonNav />
        );
    }
  }

  showCommunityDropdown() {
    if (this.props.auth) {
      return (
        <SelectCommunity></SelectCommunity>
      )
    };
  }
  
  render() {
    const {activeItem} = this.state;

    return(
      <Segment color="teal">
        <Grid>
          <Grid.Column width="8">
            <Container>
              <Menu stackable borderless>
                <Menu.Item
                  name='home'
                  active={activeItem === 'home'}
                  onClick={this.handleItemClick}
                  as={Link}
                  to='/'
                ></Menu.Item>
                <Menu.Item
                  name='about'
                  active={activeItem === 'about'}
                  onClick={this.handleItemClick}
                  as={Link}
                  to='/about'
                ></Menu.Item>
                <Menu.Item
                  name='profile'
                  active={activeItem === 'profile'}
                  onClick={this.handleItemClick}
                  as={Link}
                  to='/profile'
                ></Menu.Item>
              </Menu>
            </Container>
          </Grid.Column>
          <Grid.Column width="5">
            {this.showCommunityDropdown()}
          </Grid.Column>
          <Grid.Column width="3" verticalAlign="middle">
            <Container textAlign="right">
              {this.isUserLoggedIn()}
            </Container>
          </Grid.Column>  
        </Grid>
      </Segment>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Navbar);