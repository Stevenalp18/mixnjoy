import { Link } from "react-router-dom";
import { useRef } from "react";

const Navbar = () => {
  const hamburger = useRef();
  const dropdownNavbar = useRef();
  const handleClick = () => {
    dropdownNavbar.current.classList.toggle("hidden");
  };

  return (
    <header className="lg:py-2 lg:px-5 text-blue-900 border-b">
      <nav className="lg:flex justify-between">
        <span className="text-2xl lg:span flex justify-between lg:py-4 lg:px-auto px-4 py-6 ">
          <Link to="/" className="nav-logo-text">
            <span className="">Mix n'joy</span>
            <span className="material-symbols-outlined my-auto text-rose-400 text-lg">
              local_bar
            </span>
          </Link>
          <span
            onClick={handleClick}
            ref={hamburger}
            className="material-symbols-outlined lg:hidden hover:cursor-pointer text-3xl my-auto"
          >
            menu
          </span>
        </span>

        {/* Regular Screen Size md+ */}
        <ul
          ref={dropdownNavbar}
          className="nav-link-text text-xl flex lg:flex-row lg:gap-6 lg:flex lg:w-auto lg:relative absolute flex-col my-auto w-full lg:bg-transparent bg-white"
        >
          <li className="border-b lg:border-0">
            <Link
              to="/"
              className="hover:text-red-500 active:text-red-800 block w-full py-2 lg:px-auto px-4"
            >
              Home
            </Link>
          </li>
          <li className="border-b lg:border-0">
            <Link
              to="/drinks"
              className="hover:text-red-500 active:text-red-800 block w-full py-2 md:px-auto px-4"
            >
              Drinks
            </Link>
          </li>
          <li className="border-b lg:border-0">
            <Link
              to="/surprise-drink"
              className="hover:text-red-500 active:text-red-800 block w-full py-2 md:px-auto px-4"
            >
              Surprise Drinks
            </Link>
          </li>
          <li className="border-b lg:border-0">
            <Link
              to="/whats-in-my-bar"
              className="hover:text-red-500 active:text-red-800 block w-full py-2 md:px-auto px-4"
            >
              What's in my bar?
            </Link>
          </li>
          <li className="border-b lg:border-0">
            <Link
              to="/favorite-drinks"
              className="hover:text-red-500 active:text-red-800 block w-full py-2 md:px-auto px-4"
            >
              Favorite Drinks!
            </Link>
          </li>
          <li className="border-b lg:border-0">
            <span className="material-symbols-outlined hover:text-red-500 active:text-red-800 hover:cursor-pointer block w-full py-2 md:px-auto px-4">
              search
            </span>
          </li>
          <li className="border-b lg:border-0">
            <span className="material-symbols-outlined hover:text-red-500 active:text-red-800 hover:cursor-pointer block w-full py-2 md:px-auto px-4">
              chat
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
