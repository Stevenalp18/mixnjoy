import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="mt-20 border-t border-white/10">
    <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col items-center gap-4 text-sm text-stone-400">
      <Link to="/" className="logo-text text-2xl text-stone-200 flex items-center gap-1">
        Mix n'joy
        <span className="material-symbols-outlined text-rose-400 text-xl">local_bar</span>
      </Link>
      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
        <li><Link className="hover:text-white transition-colors" to="/">Home</Link></li>
        <li><Link className="hover:text-white transition-colors" to="/whats-in-my-bar">What's in my bar?</Link></li>
        <li><Link className="hover:text-white transition-colors" to="/surprise-drink">Surprise drinks</Link></li>
        <li><Link className="hover:text-white transition-colors" to="/favorite-drinks">Favorites</Link></li>
      </ul>
      <a
        href="https://stevenalp.com"
        target="_blank"
        rel="noreferrer"
        className="hover:text-white transition-colors"
      >
        © 2023 Steven Perez, All Rights Reserved
      </a>
    </div>
  </footer>
);

export default Footer;
