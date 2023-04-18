import React from "react";
import PropTypes from "prop-types";
import Toast from 'react-bootstrap/Toast';

function FriendStatus(props) {
    return (
        <Toast className="mb-4">
            <Toast.Header>
                <img src={props.img.src} width={props.img.width} className="rounded me-2" alt="" />
                <strong className="me-auto">{props.name}</strong>
                <small>{props.time} mins ago</small>
            </Toast.Header>
            <Toast.Body>{props.desc}</Toast.Body>
        </Toast>
    );
}

FriendStatus.propTypes = {
    img: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        width: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
            time: PropTypes.number.isRequired,

};

export default FriendStatus;