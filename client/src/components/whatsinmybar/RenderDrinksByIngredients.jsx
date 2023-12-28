import SingleModalDrinkCard from "./SingleModalDrinkCard";
import { useSelector, useDispatch } from "react-redux";
import { setSingleIngredCardActive } from "../../features/singleIngredientModalSlice";
import { useState } from "react";

const RenderDrinksByIngredients = ({ drinkData, beverage, drinksRef }) => {
  const singleIngredientCard = useSelector((state) => state.modal.value);
  const dispatch = useDispatch();
  const [drinkId, setDrinkId] = useState(null);

  const renderDrinks = () => {
    if (drinkData != null) {
      return (
        <div className=" py-10 lg:px-14">
          <div className="text-center text-xl font-mono">
            {drinkData.drinks.length} Result(s) shown for: {beverage}
          </div>
          <div
            className="py-4 hover:cursor-pointer"
            onClick={() => {
              if (drinksRef.current) {
                drinksRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
          >
            <div className="flex">
              <span className="material-symbols-outlined align-middle text-3xl flex">
                expand_more
              </span>
              <span className="material-symbols-outlined align-middle text-3xl flex text-rose-400">
                local_bar
              </span>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap p-2">
            {drinkData.drinks.map((item) => (
              <div
                onClick={() => {
                  if (singleIngredientCard) {
                    dispatch(setSingleIngredCardActive(false));
                  } else {
                    setDrinkId(item.idDrink);
                    dispatch(setSingleIngredCardActive(true));
                  }
                }}
                key={item.idDrink}
                className="mx-auto text-center mb-2 md:mb-8 rounded-xl p-4 bg-neutral-200 hover:cursor-pointer w-full md:w-1/4 lg:w-1/5"
              >
                <div className="text-center py-4 text-md lg:text-xl logo-text w-full">
                  {item.strDrink}
                </div>
                <div>
                  <img
                    src={item.strDrinkThumb}
                    alt={`Image of the ${item.strDrink} ${item.strAlcoholic} drink`}
                    width={200}
                    height={200}
                    className="mx-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      {setSingleIngredCardActive() ? (
        <SingleModalDrinkCard drinkId={drinkId} />
      ) : (
        "not true"
      )}
      {renderDrinks()}
    </>
  );
};

export default RenderDrinksByIngredients;
