import { useState } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes, Link, Outlet } from "react-router-dom";

function DressMe(props) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [shirtSize, setShirtSize] = useState("");
  const [pantsSize, setPantsSize] = useState("");
  const [neverWear, setNeverWear] = useState("");
  // const [alwaysWear, setAlwaysWear] = useState("");
  const [allValues, setAllValues] = useState({
    skinny: "",
    tight: "",
    loose: "",
    slim: "",
    someColor: "",
    other: "",
  });
  const [budget, setBudget] = useState("");

  const changeHandler = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
    console.log("value: ", e.target.value);
  };

  const handleSubmit = (event) => {
    if (isNaN(phone)) {
      alert("Phone number is not valid, type numbers");
    }
    if (name && lastName && phone) {
      console.log("Name: " + name);
      console.log("Last Name: " + lastName);
      console.log("Phone Number: " + phone);
      console.log("Full Adress: " + address);
      console.log("Shirt Size: " + shirtSize);
      console.log("Pants Size: " + pantsSize);
      console.log("Never Wear: " + neverWear);
      console.log("Always Wear: " + JSON.stringify(allValues));
      console.log("Budget " + budget);
      event.preventDefault();
      setName("");
      setLastName("");
      setPhone("");
      setAddress("");
      setShirtSize("");
      setPantsSize("");
      setNeverWear("");
      setAllValues("");
      setBudget("");
    } else {
      alert("You have to fill all the fields");
      event.preventDefault();
    }
  };

  // שם
  // שם משפחה
  // טלפון נייד - לוודא שהמס‘ ולידי
  // כתובת מלאה - טקסט בגרסה ראשונה (אופציה: להציג מפה שתציג את הכתובת שנבחרה,  autocomplete (user types and display a list of options), אינטגרציה עם google maps api
  // מידת חולצה - טקסט (אופציה סלקטור עם אפשרויות בחירה)
  // מידת מכנסיים - טקסט (אופציה סלקטור עם אפשרויות בחירה)
  // משהו שבחיים לא אלבש(גזרה\צבע) - טקסט
  // אני הכי אוהב ללבוש - טקסט
  // בא לי לנסות משהו חדש - טקסט
  // תקציב -
  // כפתור ”סיימתי“- (אופציה: יציג את הטופס מוכן)
  // כפתור- ”שלח“ - גרסא ראשונה - ידפיס לקונסול את הערכים + עובר למסך הצלחה

  return (
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
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br></br>
        <br></br>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <br></br>
        <br></br>
        <label>
          Phone Number:
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <br></br>
        <br></br>
        <label>
          Full Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <br></br>
        <br></br>
        <label>
          Shirt Size:
          <select className="option" onChange={(e) => setShirtSize(e.target.value)}>
            <option onClick={() => setShirtSize("XXS")}>XXS </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
          {/* <input type="text" value={shirtSize} onChange={(e) => setShirtSize(e.target.value)} /> */}
        </label>
        <br></br>
        <br></br>
        <label>
          Pants Size:
          <select className="option" onChange={(e) => setPantsSize(e.target.value)}>
            <option>36</option>
            <option>38</option>
            <option>40</option>
            <option>42</option>
            <option>44</option>
            <option>46</option>
          </select>
          {/* <input type="text" value={pantsSize} onChange={(e) => setPantsSize(e.target.value)} /> */}
        </label>
        <br></br>
        <br></br>
        <label>
          Never Wear:
          <select className="option" onChange={(e) => setNeverWear(e.target.value)}>
            <option>Skinny</option>
            <option>Tight</option>
            <option>Loose</option>
            <option>Slim</option>
            <option>Some Color </option>
            <option>Golf</option>
            <option>Something else</option>
          </select>
          {/* <input type="text" value={neverWear} onChange={(e) => setNeverWear(e.target.value)} /> */}
        </label>
        <br></br>
        <br></br>
        <label>
          Always Wear:<br></br>
          {/* <input type="text" value={alwaysWear} onChange={(e) => setAlwaysWear(e.target.value)} /> */}
          {/* <input type="radio" value="Male" name="AlwaysWear" /> Skinny <br></br> */}
          <input
            type="checkbox"
            value="skinny"
            name="allValues"
            id="skinny"
            onClick={changeHandler}
          />
          Skinny<br></br>
          <input
            type="checkbox"
            value="tight"
            name="allValues"
            id="tight"
            onChange={changeHandler}
          />
          Tight<br></br>
          <input
            type="checkbox"
            value="loose"
            name="allValues"
            id="loose"
            onChange={changeHandler}
          />
          Loose <br></br>
          <input
            type="checkbox"
            value="slim"
            name="allValues"
            id="slim"
            onChange={changeHandler}
          />{" "}
          Slim<br></br>
          <input
            type="checkbox"
            value="color"
            name="allValues"
            id="color"
            onChange={changeHandler}
          />{" "}
          Some Color<br></br>
          <input
            type="checkbox"
            value="other"
            name="allValues"
            id="other"
            onChange={changeHandler}
          />{" "}
          Other<br></br>
        </label>
        <div id="result"></div>
        <br></br>
        <br></br>
        <label for="budget">Budget</label>
        <input type="range" id="budget" name="budget" min={0} max={10000} />
        <br></br>
        <br></br>
        <input type="submit" value="Submit" />
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
