import React, {Component} from 'react';
import {Segment, Grid} from 'semantic-ui-react';

export default class Welcome extends Component {
  render() {
    return (
      <Segment placeholder>
        <Grid container textAlign="center" verticalAlign="middle" stretched>
          This is where the welcome text goes...
        </Grid>
      </Segment>
    )
  }
}