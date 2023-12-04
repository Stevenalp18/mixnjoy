import { useEffect, useState } from "react";

const SurpriseDrinksPage = () => {
  const [drink, setDrink] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRandomPresetData = async () => {
      setLoading(true)
      try{
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        if(!response.ok){
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data  = await response.json()
    
        if(response.ok && data != null){
          setDrink(data)
        }
    
        return data
      }
      catch(error){
        console.log('Erorr during fetch:', error.message)
        throw error
      }finally{
        setLoading(false)
      }
    }

    fetchRandomPresetData()
  }, [])


  const handleClick = async () => {
    setLoading(true)
      try{
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        if(!response.ok){
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data  = await response.json()
    
        if(response.ok && data != null){
          setDrink(data)
        }
    
        return data
      }
      catch(error){
        console.log('Erorr during fetch:', error.message)
        throw error
      }finally{
        setLoading(false)
      }
  }

  const renderDrinkCard = () => {
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

  return (
    <section>
      <div className="flex flex-col justify-center py-4">
        {loading ? <div className="text-xl text-center py-12">Mixing drinks for you...</div> : drink && renderDrinkCard()}
        <button onClick={handleClick}
        className="p-2 bg-rose-600 hover:bg-teal-400 active:bg-rose-400 text-white rounded-2xl text-center w-52 mx-auto mb-8">
          Get Surprise Drink
        </button>
      </div>
    </section>
  );
};

export default SurpriseDrinksPage;
