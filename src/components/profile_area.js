import React from "react";
import PropTypes from "prop-types";

const ProfileArea = props => {
  return (
    <div>
      <h1>Profile for {props.username}</h1>
      <h3>Your pass: {props.password}</h3>
    </div>
  );
};

ProfileArea.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string
};

export default ProfileArea;
