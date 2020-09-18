import React from "react";

function ArenaStats({ bracket, data }) {
  return (
    <tbody>
      <tr>
        <td className="tableFont">Current Rating:</td>
        <td className="tableFont">{data.rating ? data.rating : 0}</td>
      </tr>
      <tr>
        <td className="tableFont">Games:</td>
        <td className="tableFont">
          {data.season_match_statistics
            ? data.season_match_statistics.played
            : 0}
        </td>
      </tr>
      <tr>
        <td className="tableFont">Wins:</td>
        <td className="tableFont">
          {data.season_match_statistics ? data.season_match_statistics.won : 0}
        </td>
      </tr>
      <tr>
        <td className="tableFont">Losses:</td>
        <td className="tableFont">
          {data.season_match_statistics ? data.season_match_statistics.lost : 0}
        </td>
      </tr>
    </tbody>
  );
}

export default ArenaStats;
