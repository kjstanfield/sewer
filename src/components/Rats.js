import React from "react";
import Rat from "./Rat";

const Rats = ({ characters }) => {
  console.log(characters);
  return (
    <div className="rat-list">
      {characters.length === 0 ? (
        <h1>No Characters Found</h1>
      ) : (
        characters.map((character) => (
          <Rat
            key={character.name}
            name={character.name}
            rname={character.rname}
            server={character.realm.name.en_US}
            slug={character.realm.slug}
            character={character.name}
            gender={character.gender.name.en_US}
            charClass={character.character_class.name.en_US}
            race={character.race.name.en_US}
            level={character.level}
            ilevel={character.average_item_level}
          />
        ))
      )}
    </div>
  );
};

export default Rats;
