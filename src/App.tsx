import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./pages/Services";
import TechStack from "./pages/TechStack";
import Contact from "./pages/Contact";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300 font-sans">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <TechStack />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
