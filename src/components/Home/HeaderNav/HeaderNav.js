import React from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSignOut } from 'react-firebase-hooks/auth';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import auth from "../../../firebase.init";


import './HeaderNav.css'

const HeaderNav = () => {
  const [user] = useAuthState(auth);
 
  const [signOut] = useSignOut(auth);

  
  return (
    <div className="header-navbar">
      <Navbar collapseOnSelect expand="lg" fixed="top" bg="primary" className="computer-navbar" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Computer House</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav"> 
            
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/#home">Home</Nav.Link>
                <Nav.Link as={HashLink} to="/#about-section">About Us</Nav.Link>
                <Nav.Link as={HashLink} to="/#products-section">Products</Nav.Link>
              {
              user ? <> 
              <NavDropdown title={`${user?.displayName || user?.email}`} id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/manage">Manage Product</NavDropdown.Item>
                  
                <NavDropdown.Divider />
                <NavDropdown.Item as={HashLink} to="/add-new-inventory">
                  Add inventory
                </NavDropdown.Item>
                <NavDropdown.Item as={HashLink} to="/my-items">
                  My-items
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Dashboard
                </NavDropdown.Item>
              </NavDropdown>
            
              </>
              : ""
              }  
              {user ? <button onClick={() => signOut()} className="btn btn-danger">Logout</button> 
              : 
              <>
              <Link to='/login'> 
                  <button className="btn btn-warning me-2">Login</button>
              </Link>
              <Link to='/register'> 
                  <button className="btn btn-dark">Register</button>
              </Link>
              </>
              }
              </Nav>  
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNav;
