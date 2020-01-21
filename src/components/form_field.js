import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const FormField = ({ input, label, type, meta: { touched, error } }) => {
  const formGroup = classNames("form-group", {
    "has-danger": touched && error
  });

  const formControlCss = classNames("form-control", {
    "form-control-danger": touched && error
  });

  return (
    <div className={formGroup}>
      <label className="form-control-label">{label}</label>
      <div>
        <input
          {...input}
          placeholder={label}
          type={type}
          className={formControlCss}
        />
        {touched && error && (
          <span className="form-control-feedback">{error}</span>
        )}
      </div>
    </div>
  );
};

FormField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string
};
