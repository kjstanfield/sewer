import React from "react";
import Rat from "./Rat";

const Rats = ({ characters }) => {
  return (
    <div className="rat-list">
      {characters.length === 0 ? (
        <h1>No Characters Found</h1>
      ) : (
        characters.map((character) => (
          <Rat
            key={character.name}
            rname={character.name}
            level={character.level}
            charClass={character.character_class.name.en_US}
            ilevel={character.average_item_level}
            server={character.realm.name.en_US}
          />
        ))
      )}
    </div>
  );
};

export default Rats;
