import React, { Component } from 'react';
import { Segment, Container, Card, Grid, Image, Dimmer, Loader, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class Profile extends Component {
  componentDidMount() {
    this.props.onFetchUser();
  }

  userDetails() {
    if (this.props.auth.isLoading || this.props.auth === null) {
      return (
        <Grid.Column stretched>
          <Dimmer active inverted>
            <Loader size="large">Churning the butter</Loader>
          </Dimmer>
          <Image src="/paragraph.png" />
        </Grid.Column>
      );
    } else {
      return (
        <Segment>
          <Grid columns={2} divided stretched>
            <Grid.Row verticalAlign="middle">
              <Grid.Column width={8} >
                  <Card centered>
                    <Image src={this.props.auth.data.sfProfilePic} wrapped ui={false} />
                    <Card.Content>
                      <Card.Header>{`${this.props.auth.data.firstName} ${this.props.auth.data.lastName}`}</Card.Header>
                    </Card.Content>
                  </Card>
              </Grid.Column>
              <Grid.Column width={8} verticalAlign="middle">
                <strong>SF User Id:</strong> {this.props.auth.data.userId} <br />
                <strong>SF Instance URL:</strong> {this.props.auth.data.sfInstanceUrl} <br />
                <strong>User Email:</strong> {this.props.auth.data.userEmail}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      );
    }
  }

  render() {
    return (
      <Segment>
        <Container>
          <Header as="h2">
            <Icon name="cloud" />
            <Header.Content>Your Salesforce User Details</Header.Content>
          </Header>
          {this.userDetails()}
        </Container>
      </Segment>
      
    );
  };
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

const mapDispatchToProps = (dispatch) => {
  return { onFetchUser : () => dispatch(fetchUser()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);