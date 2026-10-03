import SingleModalDrinkCard from "./SingleModalDrinkCard";
import { useDispatch } from "react-redux";
import { setSingleIngredCardActive } from "../../features/singleIngredientModalSlice";
import { useState } from "react";

const RenderDrinksByIngredients = ({ drinkData, beverage, loading }) => {
  const dispatch = useDispatch();
  const [drinkId, setDrinkId] = useState(null);

  const openDrink = (id) => {
    setDrinkId(id);
    dispatch(setSingleIngredCardActive(true));
  };

  const drinks = drinkData?.drinks ?? [];

  return (
    <>
      <SingleModalDrinkCard drinkId={drinkId} />

      {beverage && (
        <div className="pt-12">
          <h2 className="text-center text-stone-300 mb-6">
            {loading ? (
              "Mixing..."
            ) : (
              <>
                <span className="text-white font-semibold">{drinks.length}</span> result
                {drinks.length === 1 ? "" : "s"} for{" "}
                <span className="logo-text text-amber-300 text-xl">{beverage}</span>
              </>
            )}
          </h2>

          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="skeleton aspect-square rounded-2xl" />
              ))}
            </div>
          ) : (
            <div key={beverage} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {drinks.map((item, i) => (
                <button
                  key={item.idDrink}
                  onClick={() => openDrink(item.idDrink)}
                  style={{ animationDelay: `${Math.min(i, 15) * 40}ms` }}
                  className="animate-fade-up group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800 text-left transition duration-300 hover:-translate-y-1 hover:border-rose-400/50 hover:shadow-xl hover:shadow-rose-900/30 active:scale-95"
                >
                  <img
                    src={item.strDrinkThumb}
                    alt={`Image of the ${item.strDrink} drink`}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 pt-10">
                    <span className="logo-text text-sm sm:text-base text-white leading-tight block">
                      {item.strDrink}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default RenderDrinksByIngredients;
