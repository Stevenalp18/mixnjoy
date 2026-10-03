import { useMemo } from "react";

const RenderDrinkCard = ({ drink }) => {
  const drinkObj = drink?.drinks?.[0];

  const ingredients = useMemo(() => {
    if (!drinkObj) return [];
    const arr = [];
    for (let i = 1; i < 16; i++) {
      const ingredient = drinkObj[`strIngredient${i}`];
      if (ingredient) {
        arr.push({
          ingredient,
          measure: drinkObj[`strMeasure${i}`] || "Add as you wish",
        });
      }
    }
    return arr;
  }, [drinkObj]);

  if (!drinkObj) {
    return <div className="text-center text-stone-400 py-10">No drink data found</div>;
  }

  const { strDrink, strDrinkThumb, strAlcoholic, strInstructions, strGlass } = drinkObj;

  return (
    <article className="grid md:grid-cols-[minmax(0,320px)_1fr] gap-6 md:gap-10 text-left animate-fade-in">
      <div className="relative">
        <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-rose-500/30 to-amber-400/20 blur-2xl" />
        <img
          src={strDrinkThumb}
          alt={`Image of the ${strDrink} ${strAlcoholic} drink`}
          className="relative w-full aspect-square object-cover rounded-2xl border border-white/10 shadow-xl"
        />
      </div>

      <div>
        <h2 className="logo-text text-3xl md:text-4xl text-white">{strDrink}</h2>
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="chip">
            <span className="material-symbols-outlined text-base text-amber-400">
              {strAlcoholic === "Alcoholic" ? "wine_bar" : "local_cafe"}
            </span>
            {strAlcoholic === "Alcoholic" ? "Alcoholic" : "Non-alcoholic"}
          </span>
          {strGlass && (
            <span className="chip">
              <span className="material-symbols-outlined text-base text-rose-400">sports_bar</span>
              {strGlass}
            </span>
          )}
        </div>

        <h3 className="mt-6 mb-2 text-xs uppercase tracking-widest text-stone-400">Ingredients</h3>
        <ul className="grid sm:grid-cols-2 gap-2">
          {ingredients.map((item, index) => (
            <li
              key={index}
              style={{ animationDelay: `${index * 40}ms` }}
              className="animate-fade-up flex justify-between gap-3 rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm"
            >
              <span className="text-stone-100">{item.ingredient}</span>
              <span className="text-stone-400 text-right">{item.measure}</span>
            </li>
          ))}
        </ul>

        <h3 className="mt-6 mb-2 text-xs uppercase tracking-widest text-stone-400">Instructions</h3>
        <p className="text-stone-300 leading-relaxed">{strInstructions}</p>
      </div>
    </article>
  );
};

export default RenderDrinkCard;
