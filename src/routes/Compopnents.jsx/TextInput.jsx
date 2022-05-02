import React from "react";

const TextInput = (props) => {
  return (
    <div>
      <label>
        {props.label}
        <input type="text" onChange={props.onChange} />
        <br></br>
        <br></br>
      </label>
    </div>
  );
};

export default TextInput;
