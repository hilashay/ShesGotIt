import "../Reviews.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { useState, useEffect } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

//   return data;
// };

// export default useFetch;

function Reviews() {
  // const comments = useComments();

  const [db, setDb] = useState();
  console.log("first db:", db);
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch("http://localhost:8080/")
      .then((response) => {
        const jsonValue = response.json();
        console.log("jsonValue ", jsonValue);
        return jsonValue;
      })
      .then((data) => {
        console.log("data", data);
        setDb(data);
      });
    console.log("lastupdate", db);
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <div className="reviews-container">
      <header>
        <h1>reviews</h1>
      </header>
      {/* <Comments comments={comments} /> */}
      <div>
        the db:{" "}
        {db?.map((x) => (
          <>
            <div>{x.title}</div>
            <div>{x.body}</div>
          </>
        ))}{" "}
      </div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

export default Reviews;
