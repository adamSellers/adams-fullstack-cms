import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';

export default class LoginButtonNav extends Component {
  render() {
    return (
      <Button primary animated="vertical" as='a href="/auth/login"' to="/auth/login">
        <Button.Content visible>Login</Button.Content>
        <Button.Content hidden>
          <Icon name="cloud" />
        </Button.Content>
      </Button>
    );
  }
}

