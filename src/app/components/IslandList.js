"use client";

import Island from "./Island";

function IslandList({ islands, onSelect }) {
  const islandCards = islands.map((island) => (
    <div key={island.id} onClick={() => onSelect(island)}>
      <Island island={island} />
    </div>
  ));

  return <div className="islandList">{islandCards}</div>;
}

export default IslandList;
