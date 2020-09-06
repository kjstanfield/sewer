import React, { useState, useEffect } from "react";
import Rat from "./Rat";

const Rats = () => {
  const [rats, setRats] = useState([]);

  useEffect(() => {
    fetch("https://kjstanfield.github.io/audaxloot.github.io/rats.json")
      .then((res) => res.json())
      .then((data) => setRats(data.rats));
  }, []);

  return (
    <div className="rat-list">
      {rats.map((rat) => (
        <Rat
          key={rat.name}
          name={rat.name}
          rname={rat.rname}
          server={rat.server}
          slug={rat.slug}
          character={rat.character}
        />
      ))}
    </div>
  );
};

export default Rats;
