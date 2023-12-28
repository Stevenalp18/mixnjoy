import RenderDrinksByIngredients from "../components/whatsinmybar/RenderDrinksByIngredients";

const FilteredBarPage = ({ drinkData, beverage }) => {
  return (
    <RenderDrinksByIngredients drinkData={drinkData} beverage={beverage} />
  );
};

export default FilteredBarPage;
