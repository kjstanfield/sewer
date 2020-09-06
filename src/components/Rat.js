import React, { useState } from "react";

const BlizzAPI = require("blizzapi");
const api = new BlizzAPI({
  region: "us",
  clientId: process.env.REACT_APP_BLIZZARD_CLIENT_ID,
  clientSecret: process.env.REACT_APP_BLIZZARD_CLIENT_SECRET,
});

const Rat = (props) => {
  api
    .query(
      `/profile/wow/character/${
        props.slug
      }/${props.character.toLowerCase()}?namespace=profile-us`
    )
    .then((data) => {
      console.log(`Ran for: ${props.character}`);
      console.log(data);
    });

  return (
    <div className="rat-container">
      <div className="rat-name">{props.name}</div>
      <div className="rat-rname">{props.rname}</div>
      <div className="rat-server">{props.server}</div>
      <div className="rat-character">{props.character}</div>

      <div className="api-container">
        <div>
          <h4>Average Item Level</h4>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Rat;
