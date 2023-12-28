import RenderDrinkCard from "../RenderDrinkCard";
import { useDispatch, useSelector } from "react-redux";
import { setSingleIngredCardActive } from "../../features/singleIngredientModalSlice";
import { useEffect, useState } from "react";

const SingleModalDrinkCard = ({ drinkId }) => {
  const modalIsActive = useSelector((state) => state.modal.value);
  const dispatch = useDispatch();
  const [singleDrinkData, setSingleDrinkData] = useState(null);

  useEffect(() => {
    const fetchDrinkById = async () => {
      if (drinkId !== null) {
        try {
          const response = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
          );
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();

          if (response.ok && data != null) {
            setSingleDrinkData(data);
          }
        } catch (error) {
          console.error("Error fetching drink by ID:", error);
        }
      }
    };
    if (drinkId && modalIsActive) {
      fetchDrinkById();
    }
  }, [modalIsActive]);

  const renderContent = () => {
    if (modalIsActive && drinkId != null) {
      return (
        <div className="relative lg:fixed left-0 right-0 lg:top-32 top-0 mx-2 lg:w-1/2 lg:mx-auto text-center pb-6 pt-2 px-3 bg-neutral-300 border-2 border-neutral-400 rounded-xl">
          <div
            className="text-right text-2xl text-red-500 font-bold hover:cursor-pointer"
            onClick={() => {
              dispatch(setSingleIngredCardActive(false));
            }}
          >
            X
          </div>
          <RenderDrinkCard drink={singleDrinkData} />
        </div>
      );
    }
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [modalIsActive]);

  return <>{modalIsActive ? renderContent() : null}</>;
};

export default SingleModalDrinkCard;
