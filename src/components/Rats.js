import React, { useState } from "react";
import Rat from "./Rat";

const Rats = () => {
  const [rats, setRats] = useState([
    {
      name: "Loading...",
      rname: "",
      server: "",
      character: "",
    },
  ]);

  return (
    <div className="rat-list">
      {rats.map((rat) => (
        <Rat
          key={rat.name}
          name={rat.name}
          rname={rat.rname}
          server={rat.server}
          character={rat.character}
        />
      ))}
    </div>
  );
};

export default Rats;
