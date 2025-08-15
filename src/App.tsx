import "./App.css";

import Navbar from "./components/Navbar.js";
import Board from "./components/Board.tsx";

function App() {
  return (
    <div className="flex lg:flex-row flex-col lg:gap-8 ">
      <Navbar />
      <Board />
    </div>
  );
}

export default App;
