"use client";

import Image from "next/image";
import { useState } from "react";

function IslandForm({ island, onBooking }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const confirmation = window.confirm(
      `Are you sure you want to book ${island.name} ? name: ${name} phone: ${phone} `
    );
    if (confirmation) onBooking();
    setName("");
    setPhone("");
  };
  return (
    <div className="form">
      <h2>{island.name}</h2>
      <Image src={island.img} alt={island.name} width="300" height="300" />
      <h3>Book a trip to {island.name} island</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type Full Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Type Phone Number"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />
        <button type="submit" className="book">
          Book for today!
        </button>
      </form>
    </div>
  );
}

export default IslandForm;
