import React from "react";
import { Navbar } from "./components";
import "./App.scss";
import {
  About,
  Header,
  Footer,
  Skills,
  Testimonials,
  Work,
} from "./containers";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default App;
