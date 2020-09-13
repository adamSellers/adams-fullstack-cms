import React, { Component } from 'react';
import { Segment, Grid, Header, Icon, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchContentType } from '../actions';

class SelectContentType extends Component {
  render() {
    return(
      <Segment placeholder>
        <Grid stretched stackable textAlign="center" verticalAlign="middle">
          <Grid.Row>
            <Grid.Column stretched>
              <Header as="h2" textAlign="center">
                <Icon name="settings" />
                <Header.Subheader>
                  Select your content type
                </Header.Subheader>
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column stretched>
              {/* <Dropdown placeholder="Select Content Type fluid" fluid selection /> */}
              {JSON.stringify(this.props.content)}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  };
}

const mapStateToProps = ({ content }) => {
  return { content };
};

const mapDispatchToProps = (dispatch) => {
  return { onFetchContentType: () => dispatch(fetchContentType()) }
};
export default connect(mapStateToProps, mapDispatchToProps)(SelectContentType);