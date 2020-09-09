import React, { useState, useEffect } from "react";
import RatList from "./RatData";
import Rats from "./Rats";

const RequestCharacters = () => {
  const [characters, setCharacters] = useState([]);

  const BlizzAPI = require("blizzapi");
  const api = new BlizzAPI({
    region: "us",
    clientId: process.env.REACT_APP_BLIZZARD_CLIENT_ID,
    clientSecret: process.env.REACT_APP_BLIZZARD_CLIENT_SECRET,
  });

  async function request(character, serverSlug) {
    const result = await api.query(
      `/profile/wow/character/${serverSlug}/${character}?namespace=profile-us`
    );
    setCharacters((characters) => [...characters, result] || []);
  }

  function requestAll(characterList) {
    let i;
    for (i = 0; i < characterList.length; i++) {
      request(characterList[i].character, characterList[i].slug);
    }
  }

  useEffect(() => {}, []);

  return (
    <div className="results">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestAll(RatList);
          //request(RatList[0].character, RatList[0].slug);
        }}
      >
        <button>Request Characters</button>
      </form>
      ;
      <Rats characters={characters} />
    </div>
  );
};

export default RequestCharacters;
