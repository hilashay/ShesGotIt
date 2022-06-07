import React, { useEffect } from "react";

const SelectInput = (props) => {
  // "idan";

  const label = () => {
    return props.counter > 4 ? "idan" : props.label;
  };

  console.log("label: ", label);
  console.log("label func: ", label());
  useEffect(() => {
    console.log("asd", props.counter);
  }, [label]);
  return (
    <div
      style={{
        display: "flex",
        margin: 10,
        padding: 10,
        justifyContent: "space-between",
      }}
    >
      <label className="label-input">{label()}</label>
      <select className="option" onChange={props.onChange} required>
        {props.sizes.map((size, index) => (
          <option key={size} value={props.sizes[index]}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
