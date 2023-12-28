import { useEffect, useState, useRef } from "react";
import { drinksType } from "../local_data/drinksType";
import RenderDrinksByIngredients from "../components/whatsinmybar/RenderDrinksByIngredients";

const WhatsInMyBarPage = () => {
  const drinksRef = useRef();
  const [beverage, setBeverage] = useState("");
  const [drinkData, setDrinkData] = useState(null);

  useEffect(() => {
    const fetchDrinksByIngredient = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${beverage}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (response.ok && data != null) {
          setDrinkData(data);
        }

        return data;
      } catch (error) {
        console.log(error);
      }
    };

    fetchDrinksByIngredient();
  }, [beverage]);

  const renderDrinkTypes = () => {
    return drinksType.map((item) => {
      const {
        id,
        alcoholType,
        image: { url, alt, width, height },
      } = item;
      return (
        <div key={id} className="flex flex-col justify-center w-1/4 md:w-auto">
          <div className="text-center logo-text text-neutral-200 text-lg">
            {alcoholType}
          </div>
          <div className="mx-auto">
            <img
              onClick={() => {
                setBeverage(alcoholType);

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="hover:cursor-pointer mx-auto"
              src={url}
              alt={alt}
              width={width}
              height={height}
            />
          </div>
        </div>
      );
    });
  };

  return (
    <section>
      <RenderDrinksByIngredients
        drinkData={drinkData}
        beverage={beverage}
        drinksRef={drinksRef}
      />

      <div className="flex flex-col p-2 mx-4 my-8 lg:w-4/5 lg:mx-auto bg-amber-800 text-white rounded-2xl">
        <div className=" text-center text-500 w-full logo-text text-neutral-200 justify-center flex">
          <div
            ref={drinksRef}
            className="text-4xl lg:text-5xl w-full border-4 border-double rounded-xl border-amber-800 py-8 bg-amber-900"
          >
            What's in my bar?
          </div>
        </div>
        <div className=" py-10 border-b-4 border-l-4 border-r-4 border-double border-amber-700 rounded-xl bg-amber-950">
          <div className="flex flex-row flex-wrap gap-6 lg:gap-12 justify-center">
            {renderDrinkTypes()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsInMyBarPage;
