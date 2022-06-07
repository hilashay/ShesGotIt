import React from "react";

const CheckboxInput = (props) => {
  return (
    <div>
      <input type="checkbox" value={props.value} name={props.name} onChange={props.onChange} />
      <label>{props.label}</label>
    </div>
  );
};

export default CheckboxInput;
