const HomePage = () => {
  return (
    <section>
      <div className="py-4 flex gap-3 flex-col">
        <h1 className="text-center mx-auto text-3xl text-blue-900 logo-text">
          Mix n'joy
        </h1>
        <h2 className="text-center mx-auto text-xl logo-text">
          Your perfect solution for your mixing hobby!
        </h2>
        <img
          src="https://images.unsplash.com/photo-1634003311194-152e30e732f7?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Lots of drinks in bar"
          width={800}
          height={400}
          className="mx-auto rounded-3xl px-2"
        />
        <p className="text-center text-xl px-4 logo-text">
          We have the recipes and the ingredients for your perfect drink!
        </p>
        <p className="text-center text-lg px-4 logo-text">
          Make Mix n'joy your new favorite resource, we have the ingredients for
          your favorite drinks. You can browse, search, save, and learn the
          different recipes. Try it out!
        </p>
      </div>
    </section>
  );
};

export default HomePage;
