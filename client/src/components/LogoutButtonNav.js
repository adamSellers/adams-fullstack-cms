import React, { Component } from 'react';
import { Button, Icon, Menu } from 'semantic-ui-react';

const LogoutButtonNav = () => {
          <Button primary animated="vertical">
            <Button.Content visible>Logout</Button.Content>
            <Button.Content hidden>
              <Icon name="sign-out" />
            </Button.Content>
          </Button>
};

export default LogoutButtonNav;