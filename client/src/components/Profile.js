import React, { Component } from 'react';
import { Segment, Container, Card, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Profile extends Component {

  constructor(props) {
    super(props);
    const profile = this.props.auth;
  }

  render() {
    return (
      <Segment placeholder>
        <Container text verticalAlign="middle" stretched>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column width={8}>
                <Container>
                  <Card
                    image={this.profile.sfProfilePic}
                    header={`${this.profile.firstName} ${this.profile.lastName}`}
                    description={`Salesforce Auth Token: ${this.profile.sfAccessToken}`}
                  />
                </Container>
              </Grid.Column>
              <Grid.Column width={8} verticalAlign="middle">
                SF User Id: {this.profile.userId} <br />
                SF Instance URL: {this.profile.sfInstanceUrl}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Profile);