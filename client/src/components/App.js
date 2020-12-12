import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../actions';

// components imported
import Navbar from './Navbar';
import Welcome from './Welcome';
import Footer from './Footer';
import About from './About';
import Profile from './Profile';
import DisplayContent from './DisplayContent';
import SingleContent from './SingleContent';


class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Router>
        <Container>
          <Navbar />
          <Route exact path="/" component={Welcome} />
          <Route exact path="/display-content" component={DisplayContent} />
          <Route path="/display-content/:contentId" component={SingleContent} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/instructions" component={About} />
          <Footer />
        </Container>
      </Router>
    );
  }
}
export default connect(null, actions)(App);