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
            pvp,
            avatar_url,
            bust_url,
            render_url,
            last_login_timestamp,
            experience,
          } = character;
          console.log(character);
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
              pvp={pvp}
              avatar_url={avatar_url}
              bust_url={bust_url}
              render_url={render_url}
              last_login={last_login_timestamp}
              experience={experience}
            />
          );
        })
      )}
    </div>
  );
};

export default Rats;
