import { useState } from "react";
import DressMeIntro from "../routes/Compopnents.jsx/DressMeIntro";
import SelectInput from "./Compopnents.jsx/SelectInput";
import TextInput from "./Compopnents.jsx/TextInput";
import Success from "./success";


function DressMe(props) {
  const [details, setDetails] = useState({
    name: "",
    lastName: "",
    phone: "",
    address: "",
    shirtSize: "XXS",
    pantsSize: "36",
    neverWear: "Skinny",
    budget: "",
  });

  const [allValues, setAllValues] = useState({
    skinny: "",
    tight: "",
    loose: "",
    slim: "",
    someColor: "",
    other: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const changeHandler = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    if (isNaN(details.phone)) {
      alert("Phone number is not valid, type numbers");
    }
    if (details.phone && details.name && details.lastName) {
      event.preventDefault();
      setIsSubmitted(true);
    } else {
      alert("You have to fill all the fields");
      event.preventDefault();
    }
  };
  return isSubmitted ? (
    <Success details={details} allValues={allValues} />
  ) : (
    <div>
      <DressMeIntro />
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Name: "
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
        />
        <TextInput
          label="Last Name: "
          onChange={(e) => setDetails({ ...details, lastName: e.target.value })}
        />
        <TextInput
          label="Phone Number: "
          onChange={(e) => setDetails({ ...details, phone: e.target.value })}
        />
        <TextInput
          label=" Full Address: "
          onChange={(e) => setDetails({ ...details, address: e.target.value })}
        />
        <SelectInput
          label="Shirt Size: "
          onChange={(e) => setDetails({ ...details, shirtSize: e.target.value })}
          sizes={["XS", "S", "M", "L", "XL", "XXL"]}
        />
        <SelectInput
          label="Pants Size: "
          onChange={(e) => setDetails({ ...details, pantsSize: e.target.value })}
          sizes={["36", "38", "40", "42", "44", "46"]}
        />
        <label>
          Never Wear:
          <select
            className="option"
            onChange={(e) => setDetails({ ...details, neverWear: e.target.value })}
          >
            <option>Skinny</option>
            <option>Tight</option>
            <option>Loose</option>
            <option>Slim</option>
            <option>Some Color </option>
            <option>Golf</option>
            <option>Something else</option>
          </select>
        </label>
        <br></br>
        <br></br>
        <label>
          Always Wear:<br></br>
          <input type="checkbox" value="skinny" name="skinny" id="skinny" onClick={changeHandler} />
          Skinny<br></br>
          <input type="checkbox" value="tight" name="tight" id="tight" onChange={changeHandler} />
          Tight<br></br>
          <input type="checkbox" value="loose" name="loose" id="loose" onChange={changeHandler} />
          Loose <br></br>
          <input type="checkbox" value="slim" name="slim" id="slim" onChange={changeHandler} /> Slim
          <br></br>
          <input
            type="checkbox"
            value="color"
            name="color"
            id="color"
            onChange={changeHandler}
          />{" "}
          Some Color<br></br>
          <input
            type="checkbox"
            value="other"
            name="other"
            id="other"
            onChange={changeHandler}
          />{" "}
          Other<br></br>
        </label>
        <div id="result"></div>
        <br></br>
        <br></br>
        <label for="budget">Budget</label>
        <input
          type="range"
          step={100}
          id="budget"
          name="budget"
          onChange={(e) => setDetails({ ...details, budget: e.target.value })}
          min={0}
          max={10000}
        />
        <div>{details.budget}</div>
        <br></br>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default DressMe;
