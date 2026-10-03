import { useEffect, useState, useRef } from "react";
import { drinksType } from "../local_data/drinksType";
import RenderDrinksByIngredients from "../components/whatsinmybar/RenderDrinksByIngredients";

const WhatsInMyBarPage = () => {
  const resultsRef = useRef();
  const [beverage, setBeverage] = useState("");
  const [drinkData, setDrinkData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!beverage) return;
    const controller = new AbortController();
    const fetchDrinksByIngredient = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${beverage}`,
          { signal: controller.signal }
        );
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        setDrinkData(data && Array.isArray(data.drinks) ? data : { drinks: [] });
        setLoading(false);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.log(error);
          setLoading(false);
        }
      }
    };
    fetchDrinksByIngredient();
    return () => controller.abort();
  }, [beverage]);

  const selectBeverage = (name) => {
    setBeverage(name);
    // wait a frame so the results section exists before scrolling to it
    requestAnimationFrame(() =>
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    );
  };

  return (
    <section className="py-10">
      <div className="text-center mb-8">
        <h1 className="logo-text text-4xl text-white">What's in my bar?</h1>
        <p className="text-stone-400 mt-2">Pick a bottle to see what you can mix.</p>
      </div>

      <div className="glass rounded-3xl p-4 sm:p-8">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
          {drinksType.map(({ id, alcoholType, image: { url, alt } }, i) => {
            const active = beverage === alcoholType;
            return (
              <button
                key={id}
                onClick={() => selectBeverage(alcoholType)}
                aria-pressed={active}
                style={{ animationDelay: `${i * 30}ms` }}
                className={`animate-fade-up group flex flex-col items-center gap-2 rounded-2xl p-3 border transition duration-300 hover:-translate-y-1 active:scale-95 ${
                  active
                    ? "bg-rose-500/20 border-rose-400/60 shadow-lg shadow-rose-900/30"
                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-amber-300/40"
                }`}
              >
                <img
                  src={url}
                  alt={alt || alcoholType}
                  className="h-20 w-20 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                />
                <span className="logo-text text-sm sm:text-base text-stone-200">{alcoholType}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div ref={resultsRef} className="scroll-mt-20">
        <RenderDrinksByIngredients
          drinkData={drinkData}
          beverage={beverage}
          loading={loading}
        />
      </div>
    </section>
  );
};

export default WhatsInMyBarPage;
