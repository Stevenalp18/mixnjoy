import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-4 my-auto bg-neutral-200 max-w-[1200px] mx-auto">
      <span className="flex justify-center text-2xl">
        <Link to="/" className="logo-text">
          <span className="">Mix n'joy</span>
          <span className="material-symbols-outlined my-auto text-rose-400 text-lg">
            local_bar
          </span>
        </Link>
      </span>
      <ul className="flex flex-wrap justify-center">
        <li className="border-b lg:border-0">
          <Link
            to="/"
            className="hover:text-red-500 active:text-red-800 block w-full py-2 lg:px-auto px-4"
          >
            Home
          </Link>
        </li>
        {/* <li className="border-b lg:border-0">
          <Link
            to="/drinks"
            className="hover:text-red-500 active:text-red-800 block w-full py-2 md:px-auto px-4"
          >
            Drinks
          </Link>
        </li> */}
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
            to="/surprise-drink"
            className="hover:text-red-500 active:text-red-800 block w-full py-2 md:px-auto px-4"
          >
            Surprise Drinks
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
      <div className="text-center ">
        <a href="https://stevenalp.com" target="_blank">
          © 2023 Steven Perez, All Rights Reserved
        </a>
      </div>
    </footer>
  );
};

export default Footer;
