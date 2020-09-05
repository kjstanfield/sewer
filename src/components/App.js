import React from "react";
import Nav from "./Nav";
import Rats from "./Rats";

// const BlizzAPI = require('blizzapi');

// const api = new BlizzAPI({
//   region: 'us',
//   clientId: process.env.REACT_APP_BLIZZARD_CLIENT_ID,
//   clientSecret: process.env.REACT_APP_BLIZZARD_CLIENT_SECRET
// });

// api.query(`/profile/wow/character/${server}/${character}?namespace=profile-us`)
//   .then((data) => {
//     console.log(data)
//   });

fetch("https://kjstanfield.github.io/audaxloot.github.io/rats.json")
  .then((res) => {
    if (res.ok) {
      console.log("Get Rats: SUCCESS");
      return res;
    } else {
      console.log("Get Rats: FAILED");
      return res;
    }
  })
  .then((res) => res.json())
  .then((data) => console.log(data));

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
