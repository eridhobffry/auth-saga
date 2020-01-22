import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as types from "../constants/actionTypes";

class LogoutPage extends Component {
  componentWillMount() {
    this.props.dispatch({
      type: types.LOGOUT__REQUESTED
    });
  }

  render() {
    return null;
  }
}

LogoutPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(LogoutPage);
