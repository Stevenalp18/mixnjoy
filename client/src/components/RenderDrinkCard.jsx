import React, { useEffect, useState } from "react";

const RenderDrinkCard = ({ drink }) => {
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    const getIngredients = () => {
      if (drink != null) {
        const arr = [];
        const drinkObj = drink.drinks[0];

        for (let i = 1; i < 16; i++) {
          const ingredientKey = `strIngredient${i}`;
          const measureKey = `strMeasure${i}`;

          if (drinkObj[ingredientKey] !== null) {
            arr.push({
              ingredient: drinkObj[ingredientKey],
              measure: drinkObj[measureKey] || "Add as you wish",
            });
          }
        }

        setIngredients(arr);
      }
    };

    getIngredients();
  }, [drink]);

  if (drink != null) {
    const { drinks } = drink;
    const {
      idDrink,
      strDrink,
      strDrinkThumb,
      strAlcoholic,
      strInstructions,
      strGlass,
    } = drinks[0];

    return (
      <div key={idDrink} className="px-8 mx-auto text-center mb-2 md:mb-8">
        <div className="text-center py-4 text-xl logo-text">{strDrink}</div>
        <div className="flex flex-col md:flex-row justify-evenly ">
          <img
            src={strDrinkThumb}
            alt={`Image of the ${strDrink} ${strAlcoholic} drink`}
            width={300}
            height={400}
            className="mx-auto"
          />
          <div className="px-8">
            <div className="text-center pt-4">
              Includes Alcohol: {strAlcoholic === "Alcoholic" ? "Yes" : "No"}
            </div>
            <div className="text-center pt-4">Glass Container: {strGlass}</div>
            <div className="text-center pt-4">
              Instructions: {strInstructions}
            </div>
            <div className="text-center pt-4">
              Ingredients:
              <ol>
                {ingredients &&
                  ingredients.map((item, index) => (
                    <li key={index}>
                      {index + 1}: {item.ingredient} - {item.measure}
                    </li>
                  ))}
              </ol>
            </div>
            <div className="text-center pt-4"></div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>no drink data found</div>;
  }
};

export default RenderDrinkCard;
