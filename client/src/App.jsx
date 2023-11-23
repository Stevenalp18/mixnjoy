import { BrowserRouter, Routes, Route } from "react-router-dom";

// components & pages
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import DrinksPage from "./pages/DrinksPage";
import SurpriseDrinksPage from "./pages/SurpriseDrinksPage";
import WhatsInMyBarPage from "./pages/WhatsInMyBarPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drinks" element={<DrinksPage />} />
            <Route path="/surprise-drink" element={<SurpriseDrinksPage />} />
            <Route path="/whats-in-my-bar" element={<WhatsInMyBarPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
