import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactForm';
import Quotes from './linked/Quotes';
import Problems from './linked/Problems';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'hi',
      headerLinks: [
        { title: 'Home', path: '/site' },
        { title: 'About', path: '/site/about' },
        { title: 'Contact', path: '/site/contact' }
      ],
      home: {
        title: 'Hello.',
        subTitle: 'My name is Ziyong Cui.',
        text: 'Let me introduce myself.'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand></Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/site">Home</Link>
                <Link className="nav-link" to="/site/about">About</Link>
                <Link className="nav-link" to="/site/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/site" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/site/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/site/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          <Route path="/site/quote" render={() => <Quotes/>} />
          <Route path="/site/problems" render={() => <Problems/>} />
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
