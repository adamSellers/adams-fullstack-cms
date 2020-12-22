import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';
import { Segment, Container, Card } from 'semantic-ui-react';


class SingleContent extends Component {

  state = {
    contentId: this.props.match.params.contentId,
    singleItem: []
  };

  // on mount, I want to filter out a single content item from state
  componentDidMount(){
    this.state.singleItem = this.props.content.data.filter( item => item.key === this.state.contentId);
  };

  // then i want to render a single full column width card with the article details from state
  render() {
    return (
      <Segment>
        <Container>
          <Card 
            centered
            fluid
            header={this.state.singleItem[0].title}
            description={this.state.singleItem[0].body}
            extra={`${this.state.singleItem[0].typeLable} Content Type - powered by Salesforce`}
          />
        </Container>
      </Segment>
    )
  };
}

const mapStateToProps = ({ content }) => {
  return ({ content });
};

export default connect(mapStateToProps)(SingleContent);