import { useEffect } from "react";
import PopupModal from "../components/PopUpModal";
import { drinksType } from "../local_data/drinksType";

const WhatsInMyBarPage = () => {
  useEffect(() => {
    console.log(drinksType);
  }, []);

  const renderDrinkTypes = () => {
    return drinksType.map((item) => {
      const {
        id,
        alcoholType,
        image: { url, alt, width, height },
      } = item;
      return (
        <div key={id} className="flex flex-col justify-center">
          <div className="text-center logo-text text-neutral-200 text-lg">
            {alcoholType}
          </div>
          <div className="mx-auto">
            <img
              className="rounded-xl"
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
      <PopupModal />
      {/* Don't Edit Above */}
      <div className="flex flex-col p-2 mx-4 my-8 lg:w-4/5 lg:mx-auto bg-amber-800 text-white rounded-2xl">
        <div className=" text-center text-500 w-full logo-text text-neutral-200 justify-center flex">
          <div className="text-4xl lg:text-5xl w-full border-4 border-double rounded-xl border-amber-800 py-8 bg-amber-900">
            What's in my bar?
          </div>
        </div>
        <div className="px-10 py-10 border-b-4 border-l-4 border-r-4 border-double border-amber-700 rounded-xl bg-amber-950">
          <div className="flex flex-row flex-wrap gap-6 lg:gap-12 justify-center">
            {renderDrinkTypes()}
          </div>
        </div>
      </div>
      {/* Don't Edit Below */}
      <h1 className="text-center text-2xl logo-text py-8">What's in my Bar?</h1>
      <div className="w-4/5 mx-auto p-2 rounded-lg bg-amber-800 mb-10">
        <div className="bg-amber-900">
          <img
            src="https://static.vecteezy.com/system/resources/previews/010/985/165/original/pink-neon-text-bar-cut-out-png.png"
            width="200"
            alt=""
            className="mx-auto"
          />
        </div>
        <div className="bg-amber-950 py-20 px-8 flex flex-col gap-20">
          <div className="border-b-8 rounded border-amber-900 flex flex-row gap-4 px-4 justify-center">
            <span>
              <img
                src="https://i.pinimg.com/736x/e4/fe/4f/e4fe4f4fcd0cf6d6cca90a8aaf49689e.jpg"
                width="100"
                alt=""
              />
            </span>
            <span>
              <img
                src="https://i.pinimg.com/736x/e4/fe/4f/e4fe4f4fcd0cf6d6cca90a8aaf49689e.jpg"
                width="100"
                alt=""
              />
            </span>
            <span>
              <img
                src="https://i.pinimg.com/736x/e4/fe/4f/e4fe4f4fcd0cf6d6cca90a8aaf49689e.jpg"
                width="100"
                alt=""
              />
            </span>
            <span>
              <img
                src="https://i.pinimg.com/736x/e4/fe/4f/e4fe4f4fcd0cf6d6cca90a8aaf49689e.jpg"
                width="100"
                alt=""
              />
            </span>
            <span>
              <img
                src="https://i.pinimg.com/736x/e4/fe/4f/e4fe4f4fcd0cf6d6cca90a8aaf49689e.jpg"
                width="100"
                alt=""
              />
            </span>
          </div>
          <div className="border-b-8 rounded border-amber-900 flex flex-row gap-4 px-4 justify-center">
            <span>
              <img
                src="https://i.pinimg.com/736x/e4/fe/4f/e4fe4f4fcd0cf6d6cca90a8aaf49689e.jpg"
                width="100"
                alt=""
              />
            </span>
            <span>
              <img
                src="https://i.pinimg.com/736x/e4/fe/4f/e4fe4f4fcd0cf6d6cca90a8aaf49689e.jpg"
                width="100"
                alt=""
              />
            </span>
            <span>
              <img
                src="https://i.pinimg.com/736x/e4/fe/4f/e4fe4f4fcd0cf6d6cca90a8aaf49689e.jpg"
                width="100"
                alt=""
              />
            </span>
            <span>
              <img
                src="https://i.pinimg.com/736x/e4/fe/4f/e4fe4f4fcd0cf6d6cca90a8aaf49689e.jpg"
                width="100"
                alt=""
              />
            </span>
            <span>
              <img
                src="https://i.pinimg.com/736x/e4/fe/4f/e4fe4f4fcd0cf6d6cca90a8aaf49689e.jpg"
                width="100"
                alt=""
              />
            </span>
          </div>
          <div className="border-b-8 rounded border-amber-900 flex flex-row gap-4 px-4 justify-center">
            <span>
              <img
                src="https://i.pinimg.com/736x/e4/fe/4f/e4fe4f4fcd0cf6d6cca90a8aaf49689e.jpg"
                width="100"
                alt=""
              />
            </span>
            <span>
              <img
                src="https://i.pinimg.com/736x/e4/fe/4f/e4fe4f4fcd0cf6d6cca90a8aaf49689e.jpg"
                width="100"
                alt=""
              />
            </span>
            <span>
              <img
                src="https://i.pinimg.com/736x/e4/fe/4f/e4fe4f4fcd0cf6d6cca90a8aaf49689e.jpg"
                width="100"
                alt=""
              />
            </span>
            <span>
              <img
                src="https://i.pinimg.com/736x/e4/fe/4f/e4fe4f4fcd0cf6d6cca90a8aaf49689e.jpg"
                width="100"
                alt=""
              />
            </span>
            <span>
              <img
                src="https://i.pinimg.com/736x/e4/fe/4f/e4fe4f4fcd0cf6d6cca90a8aaf49689e.jpg"
                width="100"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsInMyBarPage;
