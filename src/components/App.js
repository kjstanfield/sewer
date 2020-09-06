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
