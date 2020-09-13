import React from "react";
import Rat from "./Rat";

const Rats = ({ characters }) => {
  return (
    <div className="rat-list">
      {characters.length === 0 ? (
        <h1>No Characters Found</h1>
      ) : (
        characters.map((character, i) => {
          const {
            name,
            rname,
            realm,
            gender,
            race,
            level,
            average_item_level,
            character_class,
            displayName,
          } = character;

          return (
            <Rat
              key={name}
              name={displayName}
              rname={rname}
              server={realm.name.en_US}
              slug={realm.slug}
              character={name}
              gender={gender.name.en_US}
              charClass={character_class.name.en_US}
              race={race.name.en_US}
              level={level}
              ilevel={average_item_level}
              // images={images[i]}
            />
          );
        })
      )}
    </div>
  );
};

export default Rats;
