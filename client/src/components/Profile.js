import React, { Component } from 'react';
import { Segment, Container, Divider, Card, Grid, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Profile extends Component {

  componentDidMount(props) {
    let profile = this.props.auth;
  }

  render() {
    return (
      <Segment placeholder>
        <Container text verticalAlign="middle" stretched>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column width={8}>
                <Card
                  image={profile.sfProfilePic}
                  header={`${profile.firstName} ${profile.lastName}`}
                  description={`Salesforce Auth Token: ${profile.sfAccessToken}`}
                />
              </Grid.Column>
              <Grid.Column width={8} verticalAlign="middle">
                SF User Id: {profile.userId} <br />
                SF Instance URL: {profile.sfInstanceUrl}
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