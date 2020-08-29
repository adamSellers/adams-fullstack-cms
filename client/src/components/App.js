import React, {Component} from 'react';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../actions';

// components imported
import Navbar from './Navbar';
import Welcome from './Welcome';
import Footer from './Footer';


class App extends Component {

  // once the app component mounts, we will call the express API
  // for the current user.

  componentDidMount() {
    this.props.fetchUser();
    console.log(`App Component mounted, auth is ${this.props.auth}`);
  }

  render() {
    return (
      <Container>
        <Navbar />
        <Welcome />
        <Footer />
      </Container>
    );
  }
}

export default connect(null, actions)(App);