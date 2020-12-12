import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Container, Card } from 'semantic-ui-react';


class SingleContent extends Component {

  state = {
    contentId: this.props.match.params.id
  };

  // on mount, I want to filter out a single content item from state
  componentDidMount(){
    console.log(`the contentId is: ${this.contentId}`);
    const singleItem = this.props.content.data.filter( item => item.managedContentId === this.contentId);
    console.log(`in single item cmp - single item array is: ${JSON.stringify(singleItem)}`);
  };

  // then i want to render a single full column width card with the article details from state
  render() {
    return (
      <Segment>
        <Container>
          Detail for managed Content ID goes here. 
        </Container>
      </Segment>
    )
  };
}

const mapStateToProps = ({ content }) => {
  return ({ content });
};

export default connect(mapStateToProps)(SingleContent);