import React from "react";
import Container from 'react-bootstrap/Container';
import Posts from './Posts';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function Feed() {
  return (
    <React.Fragment>
      <Container fluid>
        <form>
          <Row>
            <Col md={7}><input type="text" placeholder="What did you do today?" /></Col>
            <Col md={2}><Button className="btn btn-outline-primary" variant="light" size="sm" href="#">Publish</Button></Col>
          </Row>
        </form>
        <Posts />
      </Container>
    </React.Fragment>
  );
}

export default Feed;