import React, { Component } from 'react';
import { Segment, Grid, Card, Image, Dimmer, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchContentType } from '../actions';

class SelectContentType extends Component {

  componentDidMount() {
    this.props.onFetchContentType();
  }

  newsArticles() {
    if (this.props.content.isLoading) {
      return (
        <Grid.Column stretched>
          <Dimmer active inverted>
            <Loader size="large">Spinning the wheels</Loader>
          </Dimmer>
          <Image src="/paragraph.phg" />
        </Grid.Column>
      );
    } 
    const cards = this.props.content.data.map( article => {
      console.log(`are my auth props here? ${JSON.stringify(this.props.auth)}`);
      return (
        <Grid.Column stretched>
          <Card key={article.key}>
            <Image src={article.image} />
            <Card.Content>
              <Card.Header>
                {article.title}
              </Card.Header>
              <Card.Description>
                {article.excerpt}
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      );
    });
    return cards;
  }

  render() {
    return(
      <Segment placeholder>
        <Grid stretched stackable columns="4" textAlign="center" verticalAlign="middle">
          <Grid.Row>
              {/* <Dropdown placeholder="Select Content Type fluid" fluid selection /> */}
              {this.newsArticles()}
          </Grid.Row>
        </Grid>
      </Segment>
    )
  };
}

const mapStateToProps = ({ content, auth }) => {
  return { content, auth };
};

const mapDispatchToProps = (dispatch) => {
  return { 
    onFetchContentType: () => dispatch(fetchContentType())
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(SelectContentType);