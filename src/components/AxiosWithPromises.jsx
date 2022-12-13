import React, { useState, useEffect } from "react";
import axios from "axios";

import "../App.css";

const AxiosWithPromises = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setMyData(response.data);
      })
      .catch((error) => setIsError(error.message));
  }, []);

  return (
    <>
      <h1>React + Axios with Promises</h1>
      {isError ? (
        <h2>{isError}</h2>
      ) : (
        <div className="grid">
          {myData.slice(0, 15).map((post) => {
            const { body, id, title } = post;
            return (
              <div key={id} className="card">
                <h2>{title.slice(0, 15).toUpperCase()}</h2>
                <p>{body.slice(0, 100)}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default AxiosWithPromises;
