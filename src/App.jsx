import React from "react";
import "./App.css";
import Top from "./Components/Header/Top";
import Nav from "./Components/Header/Nav";
import Section from "./Components/FirstSection/Section";
import Latest from "./Components/LatestProperty/Latest";
import PropertyType from "./Components/PropertyType/PropertyType";

const App = () => {
  return (
    <div>
      <Top />
      <Nav />
      <Section />
      <Latest />
      <PropertyType/>
    </div>
  );
};

export default App;
