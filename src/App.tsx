import "./App.css";

import Navbar from "./components/Navbar.js";
import Board from "./components/Board.tsx";

function App() {
  return (
    <div className="flex flex-row gap-8 ">
      <Navbar />
      <Board />
    </div>
  );
}

export default App;
