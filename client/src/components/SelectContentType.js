import React, { Component } from 'react';
import { Segment, Grid, Card, Message, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';

class SelectContentType extends Component {

  newsArticles() {
    if (this.props.content.isLoading) {
      return (
        <Grid.Column stretched>
          <Message>
            <Message.Header>Not Quite There Yet</Message.Header>
            <p>To see your content, please select a community from the dropdown list above</p>
          </Message>
        </Grid.Column>
      );
    } else {
      const cards = this.props.content.data.map( article => {
        return (
          <Grid.Column stretched>
            <Card key={article.key}>
              <Image src={this.props.auth.data.sfInstanceUrl + article.image} />
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
  }

  render() {
    return(
      <Segment placeholder>
        <Grid stretched stackable columns="4" textAlign="center" verticalAlign="middle">
          <Grid.Row>
              {this.newsArticles()}
          </Grid.Row>
        </Grid>
      </Segment>
    )
  };
}

// the come from the combineReducers export
const mapStateToProps = ({ content, auth }) => {
  return { content, auth };
};

export default connect(mapStateToProps)(SelectContentType);