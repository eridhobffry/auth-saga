import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as types from "../constants/actionTypes";
import ProfileArea from "../components/profile_area";

class ProfilePage extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: types.PROFILE__REQUESTED,
      payload: { userId: this.props.pageState.auth.id }
    });
  }

  render() {
    const { username = "", password = "" } = this.props.pageState.profile;

    return (
      <div>
        <ProfileArea username={username} password={password} />
      </div>
    );
  }
}

ProfilePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  pageState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    pageState: state
  };
}

export default connect(mapStateToProps)(ProfilePage);
