import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Friends(props) {
  return (
    <Card className="mt-2 shadow-lg p-1 mb-3 bg-white rounded" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body className="">
        <Row>
          <Col><Card.Title>{props.name}</Card.Title></Col>
          <Col><Button className="btn btn-outline-primary" variant="light" size="sm">Add Friend</Button></Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

Friends.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string
};

export default Friends;