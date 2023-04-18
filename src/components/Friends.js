import React from "react";
import Container from 'react-bootstrap/Container';
import FriendsInfo from "./FriendsInfo";


function Friends(){
  return (
    <React.Fragment>
      <Container className="mt=5">
      <h3>People you may know:</h3>
      <FriendsInfo />
      </Container>
    </React.Fragment>
  );
}

export default Friends;