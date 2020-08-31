import React, {Component} from 'react';
import { Button, Icon } from 'semantic-ui-react';

export default class LoginButtonNav extends Component {
  render() {
    return (
      <Button primary animated="vertical">
        <Button.Content visible>Login</Button.Content>
        <Button.Content hidden>
          <Icon name="cloud" />
        </Button.Content>
      </Button>
    );
  }
}

