import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import SectionOne from "./components/SectionOne";
import { Footer } from "./components/Footer";

function App() {
  return <>
  <Navbar/>
  <SectionOne/>
  <Footer />
  </>;
}

export default App;
