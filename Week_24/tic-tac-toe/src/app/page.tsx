"use client";

import Cell from "@/components/cell";
import { useState } from "react";

export default function Home() {
  //* States.
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");

  console.log(cells);
  

  return (
    <main className="container">
      <div className="gameBoard">
        {cells.map((cell, index) => (
          <Cell
            id={index}
            go={go}
            setGo={setGo}
            key={index}
            cells={cells}
            setCells={setCells}
          />
        ))}
      </div>
    </main>
  );
}

//* Min: .
