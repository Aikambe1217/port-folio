import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <NavBar />
      <Hero/>
      <About />
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
