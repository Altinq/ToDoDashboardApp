const BurgerMenu = ({
  navVisibility,
  toggleNav,
}: {
  navVisibility: string;
  toggleNav: () => void;
}) => {
  return (
    <button
      onClick={toggleNav}
      type="button"
      className={`w-8 h-8 flex justify-around flex-col flex-wrap z-10 cursor-pointer mb-8`}
    >
      <div
        className={`bg-gray-700 block w-8 h-[0.35rem] rounded transition-all origin-[1px] ${
          navVisibility === "" ? "rotate-45" : "rotate-0"
        }`}
      />
      <div
        className={`bg-gray-700  w-8 h-[0.35rem] rounded transition-all origin-[1px] ${
          navVisibility === ""
            ? "translate-x-full bg-transparent"
            : "translate-x-0"
        }`}
      />
      <div
        className={`bg-gray-700  w-8 h-[0.35rem] rounded transition-all origin-[1px] ${
          navVisibility === "" ? "rotate-[-45deg]" : "rotate-0"
        }`}
      />
    </button>
  );
};

export default BurgerMenu;
