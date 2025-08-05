import gridImg from "../assets/img/grid.png";
import settingsImg from "../assets/img/settings.png";
import boardImg from "../assets/img/layout.png";
import codesandboxImg from "../assets/img/codesandbox.png";
import analyticsImg from "../assets/img/database.png";

const Navbar = () => {
  return (
    <nav className="p-11">
      <h1 className="font-bold text-lg flex items-center gap-4">
        <img src={codesandboxImg} alt="Logo" className="w-6 h-6" />
        Pro Manage
      </h1>

      <ul className="mt-14 space-y-7">
        <li className="flex items-center gap-4 text-gray-500">
          <img src={gridImg} alt="Dashboard Icon" className="w-5 h-5" />
          Dashboard
        </li>
        <li className="flex items-center gap-4 text-gray-500">
          <img src={boardImg} alt="Board Icon" className="w-5 h-5" />
          Board
        </li>
        <li className="flex items-center gap-4 text-gray-500">
          <img src={analyticsImg} alt="Analytics Icon" className="w-5 h-5" />
          Analytics
        </li>
        <li className="flex items-center gap-4 text-gray-500">
          <img src={settingsImg} alt="Settings Icon" className="w-5 h-5" />
          Settings
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
