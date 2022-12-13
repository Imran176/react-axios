import React from "react";
import './App.css';

import AxiosWithPromises from "./components/AxiosWithPromises";
import AxiosWithAsyncAwait from "./components/AxiosWithAsyncAwait";

function App() {

  return (
    <div className="App">
      <AxiosWithPromises />
      <p>{`<<< ================= ================= >>>`}</p>
      <AxiosWithAsyncAwait />
    </div>
  );
}

export default App;
