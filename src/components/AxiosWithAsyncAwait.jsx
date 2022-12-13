import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

import myAxiosAPI from "../axios";

const AxiosWithAsyncAwait = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  const getApiData = async () => {
    try {
      const response = await myAxiosAPI.get("/posts");
      setMyData(response.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div>
      <h1>React + Axios With Async Await</h1>
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
    </div>
  );
};

export default AxiosWithAsyncAwait;
