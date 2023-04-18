import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Bio from "./Bio";


function User() {
  return (
    <React.Fragment>
        <img class="img-thumbnail" src="https://images.barrons.com/im-693276?width=700&height=467" alt="user" width="200px" />
        <h3>Elon BeepBoop</h3>
        <br/>
        <ButtonGroup>
          <Button className="btn btn-outline-primary" variant="light" href="#">Tweets: 25</Button>
          <Button className="btn btn-outline-primary" variant="light" href="#">Following: 10</Button>
          <Button className="btn btn-outline-primary" variant="light" href="#">Followers: 2</Button>
        </ButtonGroup>
        <hr />
        <Bio />

    </React.Fragment>
  );
}

export default User;