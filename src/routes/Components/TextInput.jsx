import React from "react";

const TextInput = (props) => {
  return (
    <div className="input-group">
      <label className="label-input">{props.label}</label>
      <input type="text" onChange={props.onChange} required minlength={props.minlength} />
      {/* <span class="required">*Required</span> */}
      <br></br>
      <br></br>
    </div>
  );
};

export default TextInput;
