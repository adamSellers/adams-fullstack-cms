import React, { Component } from 'react';
import { Segment, Container, Card, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Profile extends Component {

  render() {
    return (
      <Segment placeholder>
        <Container text verticalAlign="middle" stretched>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column width={8}>
                <Container>
                  <Card
                    image={this.props.auth.sfProfilePic}
                    header={`${this.props.auth.firstName} ${this.props.auth.lastName}`}
                    description={`Salesforce Auth Token: ${this.props.auth.sfAccessToken}`}
                  />
                </Container>
              </Grid.Column>
              <Grid.Column width={8} verticalAlign="middle">
                SF User Id: {this.props.auth.userId} <br />
                SF Instance URL: {this.props.auth.sfInstanceUrl}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  };
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Profile);