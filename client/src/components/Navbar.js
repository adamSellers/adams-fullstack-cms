import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment, Container, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import _ from 'lodash';

import LoginButtonNav from './LoginButtonNav';
import LogoutButtonNav from './LogoutButtonNav';
import SelectCommunity from './SelectCommunity';

class Navbar extends Component {
  state = { 
    activeItem: 'home'
  }

  activeItem = this.state;

  handleItemClick = (e, { name }) => {
    this.setState({ 
      activeItem: name
    })
  }

  // function to set content in navbar if logged in
  isUserLoggedIn() {
    if(_.isEmpty(this.props.auth.data)) {
      return (
        <LoginButtonNav />
      );
    } else {
      return (
        <LogoutButtonNav />
      )
    }
  }

  showCommunityDropdown() {
    if (!_.isEmpty(this.props.auth.data)) {
      return (
        <SelectCommunity></SelectCommunity>
      )
    };
  }

  showProfileTab() {
    if (!_.isEmpty(this.props.auth.data)) {
      return (
        <Menu.Item
          name='profile'
          active={this.activeItem === 'profile'}
          onClick={this.handleItemClick}
          as={Link}
          to='/profile'
        ></Menu.Item>
      )
    };
  }

  onHomeClick() {
    if (!_.isEmpty(this.props.auth.data)) {
      return '/content-type';
    } else {
      return '/';
    }
  }
  
  render() {

    return(
      <Segment color="teal">
        <Grid>
          <Grid.Column width="8">
            <Container>
              <Menu stackable borderless>
                <Menu.Item
                  name='home'
                  active={this.activeItem === 'home'}
                  onClick={this.handleItemClick}
                  as={Link}
                  to={this.onHomeClick()}
                ></Menu.Item>
                <Menu.Item
                  name='about'
                  active={this.activeItem === 'about'}
                  onClick={this.handleItemClick}
                  as={Link}
                  to='/about'
                ></Menu.Item>
                {this.showProfileTab()}
              </Menu>
            </Container>
          </Grid.Column>
          <Grid.Column width="5" verticalAlign="middle">
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