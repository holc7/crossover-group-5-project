import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import SectionOne from "./components/SectionOne";
import { Footer } from "./components/Footer";
import SixthSection from "./Components/Sixth-Section";
import SeventhSection from "./Components/Seventh-Section";

function App() {
  return (
    <>
      <Navbar />
      <SectionOne />
      <SixthSection />
      <SeventhSection />
      <Footer />
    </>
  );
}

export default App;
