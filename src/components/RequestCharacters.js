import React, { useState, useEffect } from "react";
import RatList from "./RatData";
import Rats from "./Rats";
import { api } from "../api";

const LOADER = require("../images/loader.png");
const DED_RAT = require("../images/ded_rat.png");

const RequestCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const callApis = async (rat) => {
    const { slug, characterName, rname } = rat;
    let newRat = { ...rat };

    try {
      const profile = await api.getProfile(slug, characterName, rname);
      const images = await api.getImages(slug, characterName);
      const arena = await api.getArenaBracket(slug, characterName);
      // This merges all data returned from the API into the root level of character.
      // NOTE: Data WILL get overwritten if they share the same key so the merge order does matter.
      // For exmaple if images and profile both have 'name' at the root, profile will overwrite it
      newRat = { ...newRat, ...images, ...profile, ...arena };
    } catch (error) {
      console.error(error);
      throw error;
    }

    return newRat;
  };

  const getCharacterProfiles = async () => {
    try {
      return Promise.all(
        RatList.map((rat) => {
          return callApis(rat);
        })
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    getCharacterProfiles()
      .then((charactersData) => {
        // Randomize the character order
        for (let i = charactersData.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * i);
          const temp = charactersData[i];
          charactersData[i] = charactersData[j];
          charactersData[j] = temp;
        }

        setCharacters(charactersData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <img className="rotate" src={LOADER} alt="loading" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-text">
          <code>Error! {error}</code>
        </div>
        <img className="ded-rat" src={DED_RAT} alt="error" />
      </div>
    );
  }

  return <Rats characters={characters} />;
};

export default RequestCharacters;
