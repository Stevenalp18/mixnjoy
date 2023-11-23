import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="border-2 py-4 px-5 text-blue-900">
      <nav className="flex justify-between">
        <span className="text-2xl">
          <Link to="/" className="nav-logo-text">
            <span className="">Mix n'joy</span>
            <span class="material-symbols-outlined my-auto text-rose-400 text-lg">
              local_bar
            </span>
          </Link>
        </span>
        <ul className="nav-link-text text-xl flex gap-6">
          <li>
            <Link to="/" className="hover:text-red-500 active:text-red-800">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/drinks"
              className="hover:text-red-500 active:text-red-800"
            >
              Drinks
            </Link>
          </li>
          <li>
            <Link
              to="/surprise-drink"
              className="hover:text-red-500 active:text-red-800"
            >
              Surprise Drinks
            </Link>
          </li>
          <li>
            <Link
              to="/whats-in-my-bar"
              className="hover:text-red-500 active:text-red-800"
            >
              What's in my bar?
            </Link>
          </li>
          <li>
            <span className="material-symbols-outlined hover:text-red-500 active:text-red-800 hover:cursor-pointer">
              search
            </span>
          </li>
          <li>
            <span className="material-symbols-outlined hover:text-red-500 active:text-red-800 hover:cursor-pointer">
              chat
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
