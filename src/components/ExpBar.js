import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import ExpTable from "./ExpTable";

function ExpBar({ experience, level }) {
  if (level < 120) {
    return (
      <ProgressBar
        className="exp"
        variant="exp"
        now={experience}
        max={ExpTable[parseInt(level)]}
      />
    );
  } else {
    return <div></div>;
  }
}

export default ExpBar;
