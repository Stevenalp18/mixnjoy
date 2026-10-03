import { BrowserRouter, Routes, Route, useLocation, Link } from "react-router-dom";

// components & pages
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SurpriseDrinksPage from "./pages/SurpriseDrinksPage";
import WhatsInMyBarPage from "./pages/WhatsInMyBarPage";
import Footer from "./components/Footer";

const ComingSoon = () => (
  <section className="text-center py-24 px-4 animate-fade-up">
    <span className="material-symbols-outlined text-6xl text-amber-400 animate-float">
      construction
    </span>
    <h1 className="logo-text text-4xl mt-4">Coming soon</h1>
    <p className="text-stone-400 mt-2">This part of the bar is still being built.</p>
    <Link to="/" className="btn-ghost mt-8">Back home</Link>
  </section>
);

// Re-keying on the path replays the page-enter animation on every navigation.
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <div key={location.pathname} className="animate-fade-up">
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/surprise-drink" element={<SurpriseDrinksPage />} />
        <Route path="/whats-in-my-bar" element={<WhatsInMyBarPage />} />
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 w-full max-w-6xl mx-auto px-4">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
