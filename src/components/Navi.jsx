import React, { Component } from 'react';
import {
    Container,
    Navbar,
    NavDropdown
    } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import CartDropdown from './CartDropdown';
class Navi extends Component {

    
    render() {
        return (
          <Navbar bg="light" expand="lg" >
            <Container >
              <Navbar.Brand href="#home">
                <h3 className="text-center">
                  <Link to="/">DİRENDYOL</Link>
                </h3>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                  <CartDropdown cart={this.props.cart}/>
              </Navbar.Collapse>
            </Container>
        </Navbar>
        );
    }
}

export default Navi;
