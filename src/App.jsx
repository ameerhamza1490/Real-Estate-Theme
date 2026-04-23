import React from "react";
import "./App.css";
import Top from "./Components/Header/Top";
import Nav from "./Components/Header/Nav";
import Section from "./Components/FirstSection/Section";
import Latest from "./Components/LatestProperty/Latest";
import PropertyType from "./Components/PropertyType/PropertyType";
import Quote from "./Components/Quote/Quote";
import LatestPortfolio from "./Components/LatestPortfolio/LatestPortfolio";
import LatestProduct from "./Components/LatestProduct/LatestProduct";
import Footer from "./Components/Footer/Footer";
import ResponsiveAppBar from "./Components/Header/ResponsiveAppBar";

const App = () => {
  return (
    <div>
      <Top />
      <Nav />
      <ResponsiveAppBar/>
      <Section />
      <Latest />
      <PropertyType />
      <Quote />
      <LatestPortfolio />
      <LatestProduct />
      <Footer />
    </div>
  );
};

export default App;
