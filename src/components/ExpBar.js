import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import ExpTable from "./ExpTable";
import ExpOverlay from "../images/exp_overlay.png";

function ExpBar({ experience, level }) {
  if (level < 120) {
    let max_exp = ExpTable[parseInt(level)];
    let percent = ((experience / max_exp) * 100).toFixed(2);
    return (
      <div className="exp-container">
        <img
          src={ExpOverlay}
          className="exp-overlay"
          alt="experience bar"
        ></img>
        <ProgressBar
          className="exp"
          variant="exp"
          label={
            <span className="exp-text">
              XP: {experience} / {max_exp} ({percent}%)
            </span>
          }
          now={experience}
          max={max_exp}
        />
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default ExpBar;
