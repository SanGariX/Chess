import { useEffect, useState } from "react";
import "./App.css";
import BoardComponent from "./Components/BoardComponent";
import { Board } from "./Models/Board";
function App() {
  const [board, setBoard] = useState(new Board());
  useEffect(() => {
    restart();
  }, []);
  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigurs();
    setBoard(newBoard);
  };
  return (
    <div className="app">
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
}

export default App;
