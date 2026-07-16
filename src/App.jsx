import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Footer from "./Components/Footer";

import bg from "./assets/bg_2.jpg";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main
        className="bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Hero />
        <Services />
      </main>

      <Footer />
    </div>
  );
};

export default App;
