import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Section2 from "./components/Section2";
import Section4 from "./components/Section4";
import ThirdSection from "./components/ThirdSection";
import FifthSection from "./components/FifthSection";
import Navbar from "./components/Navbar";
import SectionOne from "./components/SectionOne";
import { Footer } from "./components/Footer";
import SixthSection from "./Components/Sixth-Section";
import SeventhSection from "./Components/Seventh-Section";

function App() {
  return (
    <>
    <Navbar/>
    <SectionOne/>
    <Section2 />

      <ThirdSection />
      <Section4/>

      <FifthSection />
      <SixthSection/>
      <SeventhSection/>
      <Footer/>
    
  
  </>
  );
}

export default App;
