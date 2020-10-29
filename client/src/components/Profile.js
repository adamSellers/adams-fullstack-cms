import React, { Component } from 'react';
import { Segment, Container, Card, Grid, Image, Dimmer, Loader } from 'semantic-ui-react';
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
        <Grid columns={2} divided stretched>
          <Grid.Row verticalAlign="middle">
            <Grid.Column width={8} textAlign="center">
              <Container>
                <Card>
                  <Image src={this.props.auth.data.sfProfilePic} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>{`${this.props.auth.data.firstName} ${this.props.auth.data.lastName}`}</Card.Header>
                  </Card.Content>
                </Card>
              </Container>
            </Grid.Column>
            <Grid.Column width={8} verticalAlign="middle">
              <strong>SF User Id:</strong> {this.props.auth.data.userId} <br />
              <strong>SF Instance URL:</strong> {this.props.auth.data.sfInstanceUrl}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    }
  }

  render() {
    return (
      <Segment>
        {this.userDetails()}
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