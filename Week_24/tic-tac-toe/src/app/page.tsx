"use client";

import Cell from "@/components/cell";
import { useState } from "react";

export default function Home() {
  //* States.
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);

  return (
    <main className="container">
      <div className="gameBoard">
        {cells.map((cell, index) => (
          <Cell key={index} />
        ))}
      </div>
    </main>
  );
}
