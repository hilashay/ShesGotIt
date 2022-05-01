import { useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";
import Success from "./success";

function DressMe(props) {
  let navigate = useNavigate();

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
      <main>
        <h2>DRESS ME</h2>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={(e) => setDetails({ ...details, name: e.target.value })} />
        </label>
        <br></br>
        <br></br>
        <label>
          Last Name:
          <input
            type="text"
            onChange={(e) => setDetails({ ...details, lastName: e.target.value })}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Phone Number:
          <input type="text" onChange={(e) => setDetails({ ...details, phone: e.target.value })} />
        </label>
        <br></br>
        <br></br>
        <label>
          Full Address:
          <input
            type="text"
            onChange={(e) => setDetails({ ...details, address: e.target.value })}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Shirt Size:
          <select
            className="option"
            onChange={(e) => setDetails({ ...details, shirtSize: e.target.value })}
          >
            <option>XXS</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
        </label>
        <br></br>
        <br></br>
        <label>
          Pants Size:
          <select
            className="option"
            onChange={(e) => setDetails({ ...details, pantsSize: e.target.value })}
          >
            <option>36</option>
            <option>38</option>
            <option>40</option>
            <option>42</option>
            <option>44</option>
            <option>46</option>
          </select>
        </label>
        <br></br>
        <br></br>
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
        <input type="submit" />
      </form>
    </div>
  );
}

{
  /* <div id="result"></div>
      
<script>
    function displayRadioValue() {
        var ele = document.getElementsByName('gender');
          
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
            document.getElementById("result").innerHTML
                    = "Gender: "+ele[i].value;
        }
    }
</script> */
}

// function DressMe() {
//   return (
//     <>
//       <main>
//         <h2>DRESS MEE</h2>
//       </main>
//       <nav>
//         <Link to="/">Home</Link>
//       </nav>
//       <form onSubmit={(x) => console.log(x)}>
//         <label>
//           Name:
//           <input type="text" value={4} onChange={(y) => console.log(y)} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     </>
//   );
// }

export default DressMe;
