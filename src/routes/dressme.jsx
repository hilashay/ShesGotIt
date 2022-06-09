import { useEffect, useState } from "react";
import DressMeIntro from "./Components/DressMeIntro";
import SelectInput from "./Components/SelectInput";
import TextInput from "./Components/TextInput";
import Success from "./success";
import CheckboxInput from "./Components/CheckboxInput";
import ErrorMessage from "./Components/ErrorMessage";
import Header from "./Components/Header";

function DressMe(props) {
  const [details, setDetails] = useState({
    name: "",
    lastName: "",
    phone: "",
    address: "",
    shirtSize: "",
    pantsSize: "",
    budget: "",
  });

  const [shouldRenderError, setShouldRenderError] = useState(false);

  useEffect(() => {
    if (details.lastName.length === 0) {
      setShouldRenderError(true);
    } else {
      setShouldRenderError(false);
    }
  }, []);
  // console.log("details: ", details);

  const [alwaysWearSelect, setAlwaysWearSelect] = useState({
    skinny: "",
    tight: "",
    loose: "",
    slim: "",
    someColor: "",
    other: "",
  });

  const [neverWearSelect, setNeverWearSelect] = useState({
    skinny: "",
    tight: "",
    loose: "",
    slim: "",
    someColor: "",
    other: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [x, setX] = useState(0);
  // console.log("x: ", x);
  const neverWearChangeHandler = (e) => {
    setNeverWearSelect({ ...neverWearSelect, [e.target.name]: e.target.value });
    console.log("e1:", e.target.name, e.target.value);
  };

  const alwaysWearChangeHandler = (e) => {
    setAlwaysWearSelect({ ...alwaysWearSelect, [e.target.name]: e.target.value });
    console.log("e2:", e.target.name, e.target.value);
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
      <ErrorMessage />;
      event.preventDefault();
    }
  };
  return isSubmitted ? (
    <Success
      details={details}
      alwaysWearSelect={alwaysWearSelect}
      neverWearSelect={neverWearSelect}
    />
  ) : (
    <div>
      <Header />
      <DressMeIntro />
      <div className="input-container">
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Name: "
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
          />
          <TextInput
            label="Last Name: "
            onChange={(e) => setDetails({ ...details, lastName: e.target.value })}
          />
          {shouldRenderError ? (
            <div style={{ height: 100, width: 100, backgroundColor: "red" }} />
          ) : null}
          <TextInput
            label="Phone Number: "
            onChange={(e) => setDetails({ ...details, phone: e.target.value })}
            minlength="10"
          />
          <TextInput
            label=" Full Address: "
            onChange={(e) => setDetails({ ...details, address: e.target.value })}
          />
          <SelectInput
            label="Shirt Size:"
            counter={x}
            onChange={(e) => setDetails({ ...details, shirtSize: e.target.value })}
            sizes={["", "XS", "S", "M", "L", "XL", "XXL"]}
          />
          <SelectInput
            label="Pants Size:"
            onChange={(e) => setDetails({ ...details, pantsSize: e.target.value })}
            sizes={["", "36", "38", "40", "42", "44", "46"]}
          />
          Never Wear:
          <br />
          <CheckboxInput
            value="skinny"
            name="skinny"
            label="Skinny"
            onChange={neverWearChangeHandler}
          />
          <CheckboxInput
            value="tight"
            name="tight"
            label="Tight"
            onChange={neverWearChangeHandler}
          />
          <CheckboxInput
            value="loose"
            name="loose"
            label="Loose"
            onChange={neverWearChangeHandler}
          />
          <CheckboxInput value="slim" name="slim" label="Slim" onChange={neverWearChangeHandler} />
          <CheckboxInput
            value="color"
            name="color"
            label="Some Color"
            onChange={neverWearChangeHandler}
          />
          <CheckboxInput
            value="other"
            name="other"
            label="Other "
            onChange={neverWearChangeHandler}
          />
          <br />
          Always Wear:
          <br />
          <CheckboxInput
            value="skinny"
            name="skinny"
            label="Skinny"
            onChange={alwaysWearChangeHandler}
          />
          <CheckboxInput
            value="tight"
            name="tight"
            label="Tight"
            onChange={alwaysWearChangeHandler}
          />
          <CheckboxInput
            value="loose"
            name="loose"
            label="Loose"
            onChange={alwaysWearChangeHandler}
          />
          <CheckboxInput value="slim" name="slim" label="Slim" onChange={alwaysWearChangeHandler} />
          <CheckboxInput
            value="color"
            name="color"
            label="Some Color"
            onChange={alwaysWearChangeHandler}
          />
          <CheckboxInput
            value="other"
            name="other"
            label="Other "
            onChange={alwaysWearChangeHandler}
          />
          <br />
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
          <div style={{ display: "inline" }}>{details.budget}</div>
          <br></br>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default DressMe;
