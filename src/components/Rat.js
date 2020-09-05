import React from "react";

const Rat = (props) => {
  return (
    <div className="rat-container">
      <div className="rat-name">{props.name}</div>
      <div className="rat-rname">{props.rname}</div>
      <div className="rat-server">{props.server}</div>
      <div className="rat-character">{props.character}</div>
    </div>
  );
};

export default Rat;
