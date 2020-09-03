import React, { Component } from 'react';
import { Button, Icon, Menu } from 'semantic-ui-react';

const LogoutButtonNav = () => {
  return (
    <Button primary animated="vertical" as='a' href='/auth/login'>
      <Button.Content visible>Logout</Button.Content>
      <Button.Content hidden>
        <Icon name="sign-out" />
      </Button.Content>
    </Button>
  );
};

export default LogoutButtonNav;