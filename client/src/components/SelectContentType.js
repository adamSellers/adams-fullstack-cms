import React, { Component } from 'react';
import { Segment, Grid, Card, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchContentType } from '../actions';

class SelectContentType extends Component {

  componentDidMount() {
    this.props.onFetchContentType();
  }

  newsArticles() {
    const cards = this.props.content.map( article => {
      return (
        <Card key={article.id}>
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
      );
    });
    return cards;
  }

  render() {
    return(
      <Segment placeholder>
        <Grid stretched stackable columns="4" textAlign="center" verticalAlign="middle">
          <Grid.Row>
            <Grid.Column stretched>
              {/* <Dropdown placeholder="Select Content Type fluid" fluid selection /> */}
              {this.newsArticles()}
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