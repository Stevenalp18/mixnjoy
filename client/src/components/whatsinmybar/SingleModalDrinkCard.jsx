import RenderDrinkCard from "../RenderDrinkCard";
import { useDispatch, useSelector } from "react-redux";
import { setSingleIngredCardActive } from "../../features/singleIngredientModalSlice";
import { useEffect, useState } from "react";

const SingleModalDrinkCard = ({ drinkId }) => {
  const modalIsActive = useSelector((state) => state.modal.value);
  const dispatch = useDispatch();
  const [singleDrinkData, setSingleDrinkData] = useState(null);
  const [loading, setLoading] = useState(false);

  const close = () => dispatch(setSingleIngredCardActive(false));

  useEffect(() => {
    if (!drinkId || !modalIsActive) return;
    const controller = new AbortController();
    setLoading(true);
    setSingleDrinkData(null);
    (async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`,
          { signal: controller.signal }
        );
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        setSingleDrinkData(await response.json());
        setLoading(false);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Error fetching drink by ID:", error);
          setLoading(false);
        }
      }
    })();
    return () => controller.abort();
  }, [drinkId, modalIsActive]);

  // lock page scroll and allow Escape to close while open
  useEffect(() => {
    if (!modalIsActive) return;
    const onKey = (e) => e.key === "Escape" && dispatch(setSingleIngredCardActive(false));
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [modalIsActive, dispatch]);

  if (!modalIsActive || drinkId == null) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={close}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate-pop-in relative w-full sm:max-w-3xl max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl border border-white/10 bg-ink-900 p-5 sm:p-8 shadow-2xl"
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 grid place-items-center h-10 w-10 rounded-full bg-white/10 hover:bg-rose-500/80 transition active:scale-90"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        {loading || !singleDrinkData ? (
          <div className="grid md:grid-cols-[minmax(0,320px)_1fr] gap-8" aria-busy="true">
            <div className="skeleton aspect-square rounded-2xl" />
            <div className="space-y-4">
              <div className="skeleton h-10 w-2/3 rounded-xl" />
              <div className="skeleton h-24 rounded-xl" />
              <div className="skeleton h-24 rounded-xl" />
            </div>
          </div>
        ) : (
          <RenderDrinkCard drink={singleDrinkData} />
        )}
      </div>
    </div>
  );
};

export default SingleModalDrinkCard;
