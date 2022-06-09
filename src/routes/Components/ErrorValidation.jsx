import React from "react";

const ErrorValidation = (props) => {
  return props.field.length === 0 ? (
    <span class="requirederror">*Required</span>
  ) : (
    <span class="required">*Required</span>
  );
};

export default ErrorValidation;
