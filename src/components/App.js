import React from "react";
import Nav from "./Nav";
import RequestCharacters from "./RequestCharacters";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main flex">
        <RequestCharacters />
      </div>
    </div>
  );
}

export default App;
