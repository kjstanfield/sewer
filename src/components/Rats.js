import React, { useState, useEffect } from "react";
import Rat from "./Rat";

const Rats = () => {
  const [rats, setRats] = useState([]);

  // const BlizzAPI = require("blizzapi");
  // const api = new BlizzAPI({
  //   region: "us",
  //   clientId: process.env.REACT_APP_BLIZZARD_CLIENT_ID,
  //   clientSecret: process.env.REACT_APP_BLIZZARD_CLIENT_SECRET,
  // });

  // api
  // .query(`/profile/wow/character/${serv}/${char}?namespace=profile-us`)
  // .then((data) => {
  //   console.log(`Ran for: ${char}`);
  //   console.log(data);
  // });

  useEffect(() => {
    fetch("https://kjstanfield.github.io/audaxloot.github.io/rats.json")
      .then((res) => res.json())
      .then((data) => setRats(data.rats));
  }, []);

  return (
    <div className="rat-list">
      {rats.map((rat) => (
        <Rat
          key={rat.name}
          name={rat.name}
          server={rat.server}
          slug={rat.slug}
          character={rat.character}
        />
      ))}
    </div>
  );
};

export default Rats;
