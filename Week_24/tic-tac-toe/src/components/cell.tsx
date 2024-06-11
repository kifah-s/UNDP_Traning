import { log } from "console";
import React, { Dispatch, SetStateAction } from "react";

type CellProps = {
  id: number;
  go: string;
  setGo: Dispatch<SetStateAction<string>>;
  cells: string[];
  setCells: Dispatch<SetStateAction<string>>;
};

const Cell = ({ id, go, setGo, cells, setCells }: CellProps) => {
  //* Function.
  const handleClick = (e) => {
    // console.log(id);

    const notTaken = !cells[id];
    if (notTaken) {
      if (go === "circle") {
        handleCellChange("circle");
        setGo("cross");
      } else if (go === "cross") {
        handleCellChange("cross");
        setGo("circle");
      }
    }
  };

  const handleCellChange = (cellToChange: string) => {
    let copyCells = [...cells];
    copyCells[id] = cellToChange;
    setCells(copyCells);
  };

  return (
    <>
      <div className="square" onClick={handleClick}>
        X
      </div>
    </>
  );
};

export default Cell;
