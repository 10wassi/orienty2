import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Features from "./components/Features.tsx";
import Testimonials from "./components/Testimonials.tsx";
import Footer from "./components/footer/Footer.tsx";
import FAQ from "./components/faq/FAQ.tsx";
import NavigationFeatures from "./components/navigation/NavigationFeatures.tsx";
import SignupForm from "../signup/SignupForm.tsx"; 
import RegistrationForm from "../registration/RegistrationForm.tsx";
import PassForme from "../passe/PassForme.tsx";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Page d'accueil */}
        <Route
          path="/"
          element={
            <div className="flex overflow-hidden flex-col px-12 pt-5 pb-12 bg-white max-md:px-5">
              <main
                className="flex flex-col items-center w-full max-w-[1800px] mx-auto"
                role="main"
              >
                <Hero />
                <Features />
                <Testimonials />
                <FAQ />
                <NavigationFeatures />
                <Footer />
              </main>
            </div>
          }
        />

        {/* Page SignupForm */}
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/passe" element={<PassForme />} />
      </Routes>
    </Router>
  );
};

export default App;
