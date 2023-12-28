import { useEffect, useState } from "react";
import RenderDrinkCard from "../components/RenderDrinkCard";
import PopupModal from "../components/PopUpModal";

const SurpriseDrinksPage = () => {
  const [drink, setDrink] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomPresetData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/random.php"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        if (response.ok && data != null) {
          setDrink(data);
        }

        return data;
      } catch (error) {
        console.log("Erorr during fetch:", error.message);
        throw error;
      } finally {
        setLoading(false);
      }
    };

    fetchRandomPresetData();
  }, []);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      if (response.ok && data != null) {
        setDrink(data);
      }

      return data;
    } catch (error) {
      console.log("Erorr during fetch:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <PopupModal />
      <div className="flex flex-col justify-center py-4">
        {loading ? (
          <div className="text-xl text-center lg:py-12">
            Mixing drinks for you...
          </div>
        ) : (
          drink && <RenderDrinkCard drink={drink} />
        )}
        <button
          onClick={handleClick}
          className="p-2 bg-rose-600 hover:bg-teal-400 active:bg-rose-400 text-white rounded-2xl text-center w-52 mx-auto mb-8"
        >
          Get Surprise Drink
        </button>
      </div>
    </section>
  );
};

export default SurpriseDrinksPage;
