import { useEffect, useState } from "react";

const SurpriseDrinksPage = () => {
  const [drink, setDrink] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRandomDrink = async () => {
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/random.php/"
        );
        const data = await response.json();
        setDrink(data);
        console.log(drink);
      } catch (err) {
        setError(err);
        console.log(error);
      }
    };

    getRandomDrink();
  }, []);

  const renderDrinkCard = () => {
    if (drink !== null) {
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
        <div key={idDrink} className="px-8 mx-auto text-center mb-8">
          <div className="text-center py-4 text-xl logo-text">{strDrink}</div>
          <div className="flex flex-col md:flex-row justify-evenly ">
            <img
              src={strDrinkThumb}
              alt=""
              width={300}
              height={400}
              className="mx-auto"
            />
            <div className="px-8">
              <div className="text-center pt-4">Alcoholic: {strAlcoholic}</div>
              <div className="text-center pt-4">
                Glass Container: {strGlass}
              </div>
              <div className="text-center pt-4">
                Instructions: {strInstructions}
              </div>
              <div className="text-center pt-4">
                {/* Ingredients: {renderIngredients()} */}
              </div>
              <div className="text-center pt-4"></div>
            </div>
          </div>
        </div>
      );
    } else {
      console.log("no drink data found");
      return;
    }
  };

  useEffect(() => {
    renderDrinkCard();
  }, [drink]);

  return (
    <section>
      <div className="flex flex-col justify-center py-4">
        {drink && renderDrinkCard()}
        <button className="p-2 bg-rose-600 hover:bg-teal-400 active:bg-rose-400 text-white rounded-2xl text-center w-52 mx-auto mb-8">
          Get Surprise Drink
        </button>
      </div>
    </section>
  );
};

export default SurpriseDrinksPage;
