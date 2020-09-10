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

  // async function requestArenaBracket(realmSlug, characterName, pvpBracket) {
  //   const result = await api.query(
  //     `/profile/wow/character/${realmSlug}/${characterName}/pvp-bracket/${pvpBracket}?namespace=profile-us`
  //   );
  //   return result;
  // }

  async function requestProfile(realmSlug, characterName, rname) {
    const result = await api.query(
      `/profile/wow/character/${realmSlug}/${characterName}?namespace=profile-us`
    );

    result["rname"] = rname;
    setCharacters((characters) => [...characters, result] || []);
  }

  function requestAll(characterList) {
    let i;
    for (i = 0; i < characterList.length; i++) {
      requestProfile(
        characterList[i].slug,
        characterList[i].character,
        characterList[i].rname
      );
    }
  }

  useEffect(() => {
    requestAll(RatList);
  }, []);

  return (
    <div className="results">
      <Rats characters={characters} />
    </div>
  );
};

export default RequestCharacters;
