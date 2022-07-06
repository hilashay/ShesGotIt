import { useState, useEffect } from "react";

const useComments = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/reviews")
      .then((res) => {
        console.log("res ", res);
        return res.json();
      })
      .then((data) => {
        console.log("data ", data);

        setData(data);
      });
  }, []);

  return data;
};

export default useComments;
