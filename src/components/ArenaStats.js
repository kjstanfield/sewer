import React from "react";

function ArenaStats({ bracket, rating }) {
  return (
    <div className={`arena ${bracket}`}>
      {bracket}: {rating}
    </div>
  );
}

export default ArenaStats;
