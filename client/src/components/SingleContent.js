import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Container, Card } from 'semantic-ui-react';


class SingleContent extends Component {

  // on mount, I want to filter out a single content item from state
  componentDidMount(){
    let contentId = this.props.match.params.id;
    const singleItem = this.props.content.data.filter( item => {
      // filter out for content ID
      item.managedContentId == contentId;
    });
    console.log(`in single item cmp - single item array is: ${JSON.stringify(singleItem)}`);
  };

  // then i want to render a single full column width card with the article details from state
  render() {
    // want to grab the parameter passed in and find the single item from managed content id
    let contentId = localStorage.getItem("managedContentId");
    return (
      <Segment>
        <Container>
          Detail for managed Content ID ({this.singleItem[0].managedContentId}) goes here. 
        </Container>
      </Segment>
    )
  };

}

const mapStateToProps = ({ content }) => {
  return ({ content });
};

export default connect(mapStateToProps)(SingleContent);