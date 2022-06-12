import React from "react";

// const ErrorValidation = (props) => {
//   return props.field.length === 0 ? (
//     <span class="requirederror">*Required</span>
//   ) : (
//     <span class="required">*Required</span>
//   );
// };

let errorMessage = "";
const ErrorValidation = (props) => {
  if (props.field.length === 0) {
    errorMessage = <span class="requirederror">*Required</span>;
    return errorMessage;
  }
  if (props.field.length === 1) {
    errorMessage = <span class="requirederror">*Required at least two charcters</span>;
    return errorMessage;
  } else {
    return (errorMessage = <span class="required">*Required</span>);
  }
};

export default ErrorValidation;
