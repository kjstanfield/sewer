import React from "react";
import Nav from "./Nav";
import Rats from "./Rats";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main flex">
        <Rats />
      </div>
    </div>
  );
}

export default App;
