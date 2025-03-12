import { FC } from "react";
import { Cell } from "../Models/Cell";
type CellProps = {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
  color: string | null;
};
const CellComponent: FC<CellProps> = ({ cell, selected, click, color }) => {
  return (
    <div
      onClick={() => click(cell)}
      className={[
        "cell",
        selected ? "selected" : "",
        color !== cell.figure?.color && cell.figure && color ? "green" : "",
        cell.color,
      ].join(" ")}
    >
      {cell.figure?.logo && (
        <img className="logoChess" src={cell.figure.logo} alt="" />
      )}
      {!cell.figure && cell.available && <div className="available"></div>}
    </div>
  );
};

export default CellComponent;
