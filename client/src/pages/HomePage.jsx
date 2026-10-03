import { Link } from "react-router-dom";

const features = [
  {
    icon: "liquor",
    title: "Browse your bar",
    text: "Tap a bottle — vodka, gin, rum — and see every cocktail you can make with it.",
    to: "/whats-in-my-bar",
  },
  {
    icon: "casino",
    title: "Surprise me",
    text: "Can't decide? Roll the dice and get a random drink with the full recipe.",
    to: "/surprise-drink",
  },
  {
    icon: "favorite",
    title: "Save favorites",
    text: "Keep the drinks you love close at hand. Coming soon.",
    to: "/favorite-drinks",
  },
];

const HomePage = () => (
  <section>
    <div className="grid lg:grid-cols-2 gap-10 items-center pt-10 lg:pt-20">
      <div className="text-center lg:text-left">
        <p className="chip mb-5">
          <span className="material-symbols-outlined text-base text-amber-400">auto_awesome</span>
          Your mixing hobby, upgraded
        </p>
        <h1 className="logo-text text-5xl sm:text-6xl lg:text-7xl leading-tight bg-gradient-to-r from-rose-400 via-amber-300 to-rose-400 bg-clip-text text-transparent">
          Mix n'joy
        </h1>
        <p className="mt-5 text-lg text-stone-300 max-w-xl mx-auto lg:mx-0">
          We have the recipes and the ingredients for your perfect drink. Browse, search,
          save and learn — your new favorite cocktail is a tap away.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
          <Link to="/whats-in-my-bar" className="btn-primary">
            <span className="material-symbols-outlined">liquor</span> Explore the bar
          </Link>
          <Link to="/surprise-drink" className="btn-ghost">
            <span className="material-symbols-outlined">casino</span> Surprise me
          </Link>
        </div>
      </div>

      <div className="relative animate-float">
        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-rose-500/30 to-amber-400/20 blur-2xl" />
        <img
          src="https://images.unsplash.com/photo-1634003311194-152e30e732f7?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3"
          alt="Lots of drinks in bar"
          className="relative w-full h-72 sm:h-96 object-cover rounded-[2rem] border border-white/10 shadow-2xl"
        />
      </div>
    </div>

    <div className="grid sm:grid-cols-3 gap-5 mt-20">
      {features.map((f, i) => (
        <Link
          key={f.title}
          to={f.to}
          style={{ animationDelay: `${150 + i * 100}ms` }}
          className="glass animate-fade-up rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:border-rose-400/40 group"
        >
          <span className="material-symbols-outlined text-3xl text-rose-400 transition-transform duration-300 group-hover:scale-110">
            {f.icon}
          </span>
          <h2 className="mt-3 text-lg font-semibold text-white">{f.title}</h2>
          <p className="mt-1 text-stone-400 text-sm">{f.text}</p>
        </Link>
      ))}
    </div>
  </section>
);

export default HomePage;
