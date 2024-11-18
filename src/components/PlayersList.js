import React from "react";
import Player from "./components/Player";
import players from "./players";

const PlayersList = () => (
  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
    {players.map((player, index) => (
      <Player key={index} {...player} />
    ))}
  </div>
);

export default PlayersList;
