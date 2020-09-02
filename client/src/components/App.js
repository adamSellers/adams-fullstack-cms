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
          <title>CMS Helmet</title>
          <meta http-equiv="Content Security Policy" content="default-src *;
   img-src * 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' *;
   style-src  'self' 'unsafe-inline' *"></meta>
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