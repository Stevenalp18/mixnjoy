import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/whats-in-my-bar", label: "What's in my bar?" },
  { to: "/surprise-drink", label: "Surprise me" },
  { to: "/favorite-drinks", label: "Favorites" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `relative block px-3 py-2 rounded-full transition-colors duration-300 ${
      isActive
        ? "text-white bg-white/10"
        : "text-stone-300 hover:text-white hover:bg-white/5"
    }`;

  return (
    <header
      className={`sticky top-0 z-40 transition duration-300 border-b ${
        scrolled || open
          ? "bg-ink-950/80 backdrop-blur-lg border-white/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="logo-text text-2xl flex items-center gap-1 group">
          Mix n'joy
          <span className="material-symbols-outlined text-rose-400 text-xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125">
            local_bar
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1 text-sm font-medium">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.end} className={linkClass}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 rounded-full hover:bg-white/10 transition active:scale-90"
        >
          <span className="material-symbols-outlined text-3xl block transition-transform duration-300" style={{ transform: open ? "rotate(90deg)" : "none" }}>
            {open ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* mobile drawer: grid-rows trick gives a smooth height animation */}
      <div
        className={`md:hidden grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <ul className="overflow-hidden px-4 flex flex-col gap-1 font-medium">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.end} className={linkClass} tabIndex={open ? 0 : -1}>
                {l.label}
              </NavLink>
            </li>
          ))}
          <li className="pb-3" />
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
