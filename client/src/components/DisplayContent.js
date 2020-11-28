import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Grid, Card, Message, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';

class DisplayContent extends Component {

  newsArticles() {
    if (this.props.content.isLoading) {
      return (
        <Grid.Column stretched>
          <Message>
            <Message.Header>Not Quite There Yet</Message.Header>
            <p>To see your content, please select a channel from the dropdown list above</p>
          </Message>
        </Grid.Column>
      );
    } else {
      const cards = this.props.content.data.map( article => {
        let contentId = article.key;
        return (
          <Grid.Column stretched>
            <Card key={contentId} onClick={ ( event, data) => this.handleOnClick(event, data)} style={{ marginBottom: '2em'}}>
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

  handleOnClick( event, data ) {
    // function to navigate to single article
    console.log(`data is: ${JSON.stringify(data['key'])}`);
  }

  render() {
    return(
      <Segment placeholder>
        <Grid centered stackable columns="4" textAlign="center" verticalAlign="top">
          <Grid.Row style={{ marginBottom: '2em' }}>
              {this.newsArticles()}
          </Grid.Row>
        </Grid>
      </Segment>
    )
  };
}

// these come from the combineReducers export
const mapStateToProps = ({ content, auth }) => {
  return { content, auth };
};

export default connect(mapStateToProps)(DisplayContent);