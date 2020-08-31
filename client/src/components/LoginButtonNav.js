import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

export default class LoginButtonNav extends Component {
  render() {
    return (
      <Button primary animated="vertical" as={Link} to='/auth/login'>
        <Button.Content visible>Login</Button.Content>
        <Button.Content hidden>
          <Icon name="cloud" />
        </Button.Content>
      </Button>
    );
  }
}

