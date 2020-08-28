import React from 'react';
import { Container } from 'semantic-ui-react';

// components imported
import Navbar from './Navbar';
import Welcome from './Welcome';
import Footer from './Footer';


export default class App extends React.Component {

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