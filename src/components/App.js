import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NavBar from "./navbar";
import { Container, Row, Nav } from "reactstrap";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar auth={this.props.auth} />
        <Container className="content-wrapper">
          <Row>{this.props.children}</Row>
        </Container>
      </div>
    );
  }
}

App.propTypes = {
  auth: PropTypes.object.isRequired,
  children: PropTypes.element
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(App);
