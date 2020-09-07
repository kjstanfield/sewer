import React, { useState } from "react";

const Rat = (props) => {
  return (
    <div className="rat-container">
      <div className="rat-name">
        {props.name}
        <span className="rat-emoji" role="img" aria-label="rat emoji">
          🐀
        </span>
      </div>
      <div className="rat-rname">{props.rname}</div>
      <div className="rat-server">{props.server}</div>
      <div className="rat-character">{props.character}</div>

      <div className="api-container">
        <div>
          <h4>Average Item Level</h4>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Rat;
