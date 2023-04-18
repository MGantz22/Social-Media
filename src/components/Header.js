import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';


function Header() {
  return (
    <React.Fragment>
      <Navbar expaid="xxl">
        <Container fluid className="NavBar">
          <div className="NavButtons">
            <a class="navbar-brand" href="Home">Home</a>
            <a class="navbar-brand" href="Notifications">Notifications</a>
            <a class="navbar-brand" href="Messages">Messages</a>

          </div>     

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-prima">Search</Button>
            
          </Form>
          
          <div>
            <Button variant="outline-prima">Tweet</Button>
          </div>

        </Container>
      </Navbar>
    </React.Fragment>
    
  );
}

export default Header;