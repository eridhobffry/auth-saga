import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "reactstrap";
import PropTypes from "prop-types";

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className="form-signin">
      <Field
        component="input"
        name="username"
        id="username"
        type="text"
        placeholder="username"
        required="required"
        className="form-control"
      />

      <Field
        component="input"
        name="password"
        id="password"
        type="password"
        placeholder="password"
        required="required"
        className="form-control"
      />

      <Button type="submit" size="lg" block color="success">
        {props.isSubmitting ? (
          <span>
            <i className="fa fa-spin fa-spinner" />
            Loging in
          </span>
        ) : (
          <span>Login</span>
        )}
      </Button>
    </form>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.func.isRequired
};

export default reduxForm({
  form: "login"
})(LoginForm);
