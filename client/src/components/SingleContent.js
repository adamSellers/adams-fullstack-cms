import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Container, Card } from 'semantic-ui-react';


class SingleContent extends Component {

  // want to grab the parameter passed in and find the single item from managed content id

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