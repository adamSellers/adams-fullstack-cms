import React, { Component } from 'react';
import { Segment, Container, Card, Grid, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class Profile extends Component {
  componentDidMount() {
    this.props.onFetchUser();
  }

  render() {
    return (
      <Segment>
        <Grid columns={2} divided stretched>
          <Grid.Row verticalAlign="middle">
            <Grid.Column width={8} textAlign="center">
              <Container>
                <Card>
                  <Image src={this.props.auth.sfProfilePic} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>{`${this.props.auth.firstName} ${this.props.auth.lastName}`}</Card.Header>
                  </Card.Content>
                </Card>
              </Container>
            </Grid.Column>
            <Grid.Column width={8} verticalAlign="middle">
              <strong>SF User Id:</strong> {this.props.auth.userId} <br />
              <strong>SF Instance URL:</strong> {this.props.auth.sfInstanceUrl}
            </Grid.Column>
          </Grid.Row>
        </Grid>
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