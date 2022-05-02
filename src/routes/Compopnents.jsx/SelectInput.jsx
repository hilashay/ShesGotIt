import React from "react";

const SelectInput = (props) => {
  return (
    <div>
      <label>
        {props.label}
        <select className="option" onChange={props.onChange}>
          {props.sizes.map((size) => (
            <option>{size}</option>
          ))}
        </select>
      </label>
      <br></br>
      <br></br>
    </div>
  );
};

export default SelectInput;
