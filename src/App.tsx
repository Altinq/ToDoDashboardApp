import "./App.css";
import Board from "./components/Board.js";
import Navbar from "./components/Navbar.js";
function App() {
  return (
    <div className="flex flex-row gap-8 ">
      <Navbar />
      <Board />
    </div>
  );
}

export default App;
