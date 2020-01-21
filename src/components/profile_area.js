import React from "react";
import PropTypes from "prop-types";

const ProfileArea = props => {
  return (
    <div>
      <h1>Profile for {props.username}</h1>
      <h3>Your pass: {props.email}</h3>
    </div>
  );
};

ProfileArea.PropTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string
};

export default ProfileArea;
