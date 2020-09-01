import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import * as actions from '../actions';

// components imported
import Navbar from './Navbar';
import Welcome from './Welcome';
import Footer from './Footer';
import About from './About';
import Profile from './Profile';


class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Router>
        <Helmet>
          <title>Title done via react helmet!</title> 
          <meta httpEquiv="Content-Security-Poliucy" content="default-src 'self'; img-src 'self' 'https://*.documentforce.com' data:"></meta>
        </Helmet>
        <Container>
          <Navbar />
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Footer />
        </Container>
      </Router>
    );
  }
}
export default connect(null, actions)(App);