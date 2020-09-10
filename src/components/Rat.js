import React from "react";

export default function Rat({
  rname,
  server,
  character,
  race,
  gender,
  charClass,
  level,
  ilevel,
}) {
  return (
    <div className="rat-container" key={character}>
      <div className="rat-name">
        <span className="rat-emoji" role="img" aria-label="rat emoji">
          🐀
        </span>
        {rname}
      </div>
      <div className="rat-server">{server}</div>
      <div className="rat-character">{character}</div>
      <div className={`rat-gender-${gender}`}>{gender}</div>
      <div className="rat-race">{race}</div>
      <img
        src={`https://wow.zamimg.com/images/wow/icons/medium/classicon_${charClass
          .replace(/\s/g, "")
          .toLowerCase()}.jpg`}
        alt={charClass}
      />
      <div className="rat-level">Level: {level}</div>
      <div className="rat-ilevel">Average Item Level: {ilevel}</div>
      <div className="api-container"></div>
    </div>
  );
}
