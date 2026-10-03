import { useCallback, useEffect, useState } from "react";
import RenderDrinkCard from "../components/RenderDrinkCard";

const SurpriseDrinksPage = () => {
  const [drink, setDrink] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchRandomDrink = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      setDrink(await response.json());
    } catch (err) {
      console.log("Error during fetch:", err.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRandomDrink();
  }, [fetchRandomDrink]);

  return (
    <section className="py-10">
      <div className="text-center mb-8">
        <h1 className="logo-text text-4xl text-white">Surprise me</h1>
        <p className="text-stone-400 mt-2">A random drink, with the full recipe.</p>
      </div>

      <div className="glass rounded-3xl p-5 md:p-10 min-h-[22rem]">
        {loading ? (
          <div className="grid md:grid-cols-[minmax(0,320px)_1fr] gap-10" aria-busy="true">
            <div className="skeleton aspect-square rounded-2xl" />
            <div className="space-y-4">
              <div className="skeleton h-10 w-2/3 rounded-xl" />
              <div className="skeleton h-6 w-1/3 rounded-full" />
              <div className="skeleton h-24 rounded-xl" />
              <div className="skeleton h-24 rounded-xl" />
            </div>
          </div>
        ) : error ? (
          <p className="text-center text-stone-400 py-20">
            The bartender dropped the shaker. Try again!
          </p>
        ) : (
          drink && <RenderDrinkCard key={drink.drinks[0].idDrink} drink={drink} />
        )}
      </div>

      <div className="text-center mt-8">
        <button onClick={fetchRandomDrink} disabled={loading} className="btn-primary">
          <span className={`material-symbols-outlined ${loading ? "animate-spin" : ""}`}>
            casino
          </span>
          {loading ? "Mixing..." : "Get another drink"}
        </button>
      </div>
    </section>
  );
};

export default SurpriseDrinksPage;
