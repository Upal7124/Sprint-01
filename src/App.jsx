import "./App.css";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Footer from "./Components/Footer";

import bg from "./assets/bg_2.jpg";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <div className="main-content" style={{ backgroundImage: `url(${bg})` }}>
        <Hero />
        <Services />
      </div>

      <Footer />
    </div>
  );
};

export default App;
