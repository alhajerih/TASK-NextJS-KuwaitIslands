"use client";

import { useState } from "react";

import IslandForm from "./IslandForm";
import IslandList from "./IslandList";
import Search from "./Search";

function IslandsContainer({ islands }) {
  const [query, setQuery] = useState("");
  const [currentIsland, setCurrentIsland] = useState(islands[0]);
  const [allIslands, setAllIslands] = useState(islands);
  function handleChange(event) {
    setQuery(event.target.value);
  }

  const handleIslandSelect = (island) => {
    setCurrentIsland(island);
  };
  const handleBooking = () => {
    const updatedIslands = allIslands.map((island) =>
      island.id === currentIsland.id
        ? { ...island, visitors: island.visitors + 1 }
        : island
    );

    setAllIslands(updatedIslands);
    const updatedIsland = updatedIslands.find(
      (island) => island.id === currentIsland.id
    );
    setCurrentIsland(updatedIsland);
  };

  const filteredIslands = allIslands.filter((island) =>
    island.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="islands-container">
      <div>
        <Search handleChange={handleChange} />
        <IslandList islands={filteredIslands} onSelect={handleIslandSelect} />
      </div>
      <IslandForm island={currentIsland} onBooking={handleBooking} />
    </div>
  );
}

export default IslandsContainer;
