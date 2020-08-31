import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';

const LogoutButtonNav = () => {
  <Menu.Item name='logout' position="right" as='a' href='/auth/logout'>
            <Button primary animated="vertical">
              <Button.Content visible>Logout</Button.Content>
              <Button.Content hidden>
                <Icon name="sign-out" />
              </Button.Content>
            </Button>
        </Menu.Item>
};

export default LogoutButtonNav;