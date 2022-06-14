import React from "react";

let phoneErrorMessage = "";

const PhoneValidation = (props) => {
  const phoneNumberString = Object.values(props.phone);
  const phoneNumber = parseInt(phoneNumberString);
  if (!props.phone) {
    return (phoneErrorMessage = <span class="requirederror">*Required</span>);
  }
  if (isNaN(phoneNumber)) {
    return (phoneErrorMessage = <span class="requirederror">*NOT A NUMBER</span>);
  } else if (10 > props.phone.length) {
    phoneErrorMessage = <span class="requirederror">*at least 10 charcters</span>;
    return phoneErrorMessage;
  } else {
    return (phoneErrorMessage = <span class="required">*Required</span>);
  }
};

export default PhoneValidation;
