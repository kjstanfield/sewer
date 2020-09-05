import React from "react";
export default function Rat({ name, server, character }) {
  return (
    <div className="sewer-rat">
      <h2>{name}</h2>
      <h3>{server}</h3>
      <h3>{character}</h3>
    </div>
  );
}
